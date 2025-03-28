'use client';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useAuthClient } from '@/lib/auth-client';
import { generateAvatar } from '@/lib/utils';
import { type SignUpSchema, signupSchema } from '@/lib/validators/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FormInput } from './form-input';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export function SignUpForm() {
	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();
	const { toast } = useToast();


	const form = useForm<SignUpSchema>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: SignUpSchema) => {
		await useAuthClient.signUp.email({
			name: `${data.firstName} ${data.lastName}`,
			email: data.email,
			password: data.password,
			image: await generateAvatar(`${data.firstName} ${data.lastName}`),
			callbackURL: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
			fetchOptions: {
				onResponse: () => {
					setLoading(false);
				},
				onRequest: () => {
					setLoading(true);
				},
				onError: (ctx) => {
					if (ctx.error.status === 403) {
						toast({
							title: 'Verify your email',
							description: ctx.error.message,
							variant: 'destructive',
							duration: 5000, // 5 seconds
						});
					}
				},
				onSuccess: async () => {
					toast({
						title: 'Success',
						description: 'Sign up successful',
						variant: 'default',
						duration: 5000, // 5 seconds
					});
					router.push('/sign-in');
				},
			},
		});
		form.reset();
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormInput name="firstName" placeholder="First name" form={form} />
				<FormInput name="lastName" placeholder="Last name" form={form} />
				<FormInput name="email" type="email" placeholder="Email" form={form} />
				<FormInput name="password" type="password" placeholder="Password" form={form} />
				<Button type="submit" className="w-full" disabled={loading}>
					{loading ? (
						<Loader2 size={16} className="animate-spin" />
					) : (
						"Create an account"
					)}
				</Button>
			</form>
		</Form>
	);
}
