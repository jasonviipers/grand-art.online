'use client';
import {useToast} from '@/hooks/use-toast';
import {useAuthClient} from '@/lib/auth-client';
import {ForgotPasswordSchema, forgotPasswordSchema} from '@/lib/validators/auth';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Button} from '../ui/button';
import {Form} from '../ui/form';
import {FormInput} from './form-input';

export function ForgotPasswordForm() {
	const {toast} = useToast();
	const form = useForm<ForgotPasswordSchema>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = async (data: ForgotPasswordSchema) => {
		const {error} = await useAuthClient.forgetPassword({
			email: data.email,
			redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
		});
		if (error) {
			console.log(error);
			toast({
				title: 'Error',
				description: error.message,
				variant: 'destructive',
			});
		}
		toast({
			title: 'Success',
			description: 'Reset password link sent',
			variant: 'default',
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<div className="space-y-2">
					<FormInput name="email" type="email" placeholder="Email" form={form} />
				</div>
				<Button type="submit" className="w-full">
					Send reset link
				</Button>
			</form>
		</Form>
	);
}
