'use client';
import {useToast} from '@/hooks/use-toast';
import {useAuthClient} from '@/lib/auth-client';
import {ResetPasswordSchema, resetPasswordSchema} from '@/lib/validators/auth';
import {zodResolver} from '@hookform/resolvers/zod';
import {useRouter} from 'next/navigation';
import {useForm} from 'react-hook-form';
import {Button} from '../ui/button';
import {Form} from '../ui/form';
import {FormInput} from './form-input';

export function ResetPasswordForm() {
	const {toast} = useToast();
	const router = useRouter();
	const form = useForm<ResetPasswordSchema>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = async (data: ResetPasswordSchema) => {
		console.log(data);
		const {error} = await useAuthClient.resetPassword({
			newPassword: data.password,
			fetchOptions: {
				onSuccess: async () => {
					router.push('/sign-in');
				},
			},
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
			description: 'Password reset successful',
			variant: 'default',
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<div className="space-y-2">
					<FormInput name=" password" type="password" placeholder="New password" form={form} />
					<FormInput
						name="confirmPassword"
						type="password"
						placeholder="Confirm new password"
						form={form}
					/>
				</div>
				<Button type="submit" className="w-full">
					Send reset link
				</Button>
			</form>
		</Form>
	);
}
