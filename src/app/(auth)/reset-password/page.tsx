'use client';

import {ResetPasswordForm} from '@/components/form/reset-password-form';
import {Card, CardContent, CardHeader} from '@/components/ui/card';

export default function ResetPassword() {
	return (
		<Card className="w-full">
			<CardHeader className="space-y-1 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">Reset password</h1>
				<p className="text-sm text-muted-foreground">Enter your new password below</p>
			</CardHeader>
			<CardContent className="space-y-4">
				<ResetPasswordForm />
			</CardContent>
		</Card>
	);
}
