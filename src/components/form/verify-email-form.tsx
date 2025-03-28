'use client';

import {Button} from '@/components/ui/button';
import {Form} from '@/components/ui/form';
import {useToast} from '@/hooks/use-toast';
import {useAuthClient} from '@/lib/auth-client';
import {VerifyEmailSchema, verifyEmailSchema} from '@/lib/validators/auth';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {VerificationCode} from '../auth/verification-code';

interface VerifyEmailFormProps {
	onVerify?: (code: string) => void;
	onResend?: () => void;
}

export function VerifyEmailForm({onVerify, onResend}: VerifyEmailFormProps) {
	const [isResending, setIsResending] = useState(false);
	const {toast} = useToast();

	const params = new URLSearchParams(window.location.search);
	const _email = params.get('email');
	const _type = params.get('type');

	const form = useForm<VerifyEmailSchema>({
		resolver: zodResolver(verifyEmailSchema),
		defaultValues: {
			code: '',
		},
	});

	const onSubmit = async (data: VerifyEmailSchema) => {
		onVerify?.(data.code);
		const {error} = await useAuthClient.twoFactor.verifyTotp({
			code: data.code,
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
			description: 'Email verified',
			variant: 'default',
		});
	};

	const handleResend = async () => {
		try {
			setIsResending(true);
			await onResend?.();
		} finally {
			setIsResending(false);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<div className="space-y-2">
					<VerificationCode
						length={6}
						value={form.watch('code')}
						onChange={(value) => form.setValue('code', value)}
					/>
				</div>
				<Button type="submit" className="w-full">
					Verify email
				</Button>
				<div className="text-center">
					<div className="flex flex-col gap-4">
						<p className="text-sm text-center text-muted-foreground">
							Didn&apos;t receive the code?{' '}
							<Button
								type="button"
								variant="link"
								className="text-sm text-muted-foreground"
								disabled={isResending}
								onClick={handleResend}
							>
								{isResending ? 'Sending...' : 'Resend'}
							</Button>
						</p>
					</div>
				</div>
			</form>
		</Form>
	);
}
