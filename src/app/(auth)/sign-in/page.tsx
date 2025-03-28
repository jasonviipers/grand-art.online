'use client';
import {AuthFormDivider} from '@/components/auth/auth-form-divider';
import {AuthSocialButtons} from '@/components/auth/auth-social-buttons';
import {SignInForm} from '@/components/form/sign-in-form';
import {Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';
import Link from 'next/link';
import {Suspense} from 'react';

export default function SignIn() {
	return (
		<Card className="w-full">
			<CardHeader className="space-y-1 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
				<p className="text-sm text-muted-foreground">Welcome back! Please sign in to continue</p>
			</CardHeader>
			<CardContent className="space-y-4">
				<AuthSocialButtons />
				<AuthFormDivider />
				<Suspense fallback={<SkeletonAuth />}>
					<SignInForm />
				</Suspense>
			</CardContent>
			<CardFooter className="flex flex-col gap-4">
				<p className="text-sm text-center text-muted-foreground">
					Don&apos;t have an account?{' '}
					<Link href="/sign-up" className="text-primary hover:underline">
						Sign up
					</Link>
				</p>
			</CardFooter>
		</Card>
	);
}

const SkeletonAuth = () => {
	return (
		<div className="flex flex-col space-y-3">
			<div className="space-y-2">
				<Skeleton className="h-10 w-full" />
				<Skeleton className="h-10 w-full" />
			</div>
			<div className="flex justify-center space-x-2">
				<Skeleton className="h-10 w-3/5" />
			</div>
		</div>
	);
};
