'use client';

import {ForgotPasswordForm} from '@/components/form/forgot-password-form';
import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card';
import Link from 'next/link';

export default function ForgotPassword() {
	return (
		<Card className="w-full">
			<CardHeader className="space-y-1 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">Reset password</h1>
				<p className="text-sm text-muted-foreground">
					Enter your email address and we&apos;ll send you a reset link
				</p>
			</CardHeader>
			<CardContent className="space-y-4">
				<ForgotPasswordForm />
			</CardContent>
			<CardFooter className="flex flex-col gap-4">
				<p className="text-sm text-center text-muted-foreground">
					Remember your password?{' '}
					<Link href="/sign-in" className="text-primary hover:underline">
						Sign in
					</Link>
				</p>
			</CardFooter>
		</Card>
	);
}
