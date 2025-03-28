'use client';

import {AuthFormDivider} from '@/components/auth/auth-form-divider';
import {AuthSocialButtons} from '@/components/auth/auth-social-buttons';
import {SignUpForm} from '@/components/form/sign-up-form';
import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card';
import Link from 'next/link';

export default function SignUp() {
	return (
		<Card className="w-full">
			<CardHeader className="space-y-1 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
				<p className="text-sm text-muted-foreground">Enter your details to create your account</p>
			</CardHeader>
			<CardContent className="space-y-4">
				<AuthSocialButtons />
				<AuthFormDivider />
				<SignUpForm />
			</CardContent>
			<CardFooter className="flex flex-col gap-4">
				<p className="text-sm text-center text-muted-foreground">
					Already have an account?{' '}
					<Link href="/sign-in" className="text-primary hover:underline">
						Sign in
					</Link>
				</p>
			</CardFooter>
		</Card>
	);
}
