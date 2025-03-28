'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useAuthClient } from '@/lib/auth-client';
import { type SignInSchema, signinSchema } from '@/lib/validators/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FormInput } from './form-input';
import { useState } from 'react';

export function SignInForm() {
	const [loading, setLoading] = useState<boolean>(false);
	const { toast } = useToast();

	const form = useForm<SignInSchema>({
		resolver: zodResolver(signinSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: SignInSchema) => {
		const { data: session, error } = await useAuthClient.signIn.email(
			{
				email: data.email,
				password: data.password,
				callbackURL: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
			},
			{
				onRequest() {
					setLoading(true);
				},
				onResponse: () => {
					setLoading(false);
				},
				onError: (ctx) => {
					if (ctx.error.status === 403) {
						toast({
							title: 'Verify your email',
							description: 'Please verify your email',
							variant: 'destructive',
						});
					}
					toast({
						title: 'Error',
						description: ctx.error.message,
						variant: 'destructive',
					});
				},
			},
		);

		if (error) {
			toast({
				title: 'Error',
				description: error.message,
				variant: 'destructive',
			});
		}

		if (session) {
			toast({
				title: 'Success',
				description: 'You are logged in',
				variant: 'default',
			});
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormInput name="email" type="email" placeholder="Email" form={form} />
				<div className="space-y-2">
					<FormInput name="password" type="password" placeholder="Password" form={form} />
					<div className="flex items-center justify-between text-sm">
						<Link href="/forgot-password" className="text-primary hover:underline">
							Forgot password?
						</Link>
					</div>
				</div>
				<Button type="submit" className="w-full" disabled={loading}>
					{loading ? 'Loading...' : 'Continue'}
				</Button>
			</form>
		</Form>
	);
}
