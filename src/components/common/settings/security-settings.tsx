"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChangePassword } from './password/change-password';
import { TwoFaPassword } from './password/two-fa-password';
import { auth } from '@/lib/auth';

export  function SecuritySettings() {
	// const [session] = await Promise.all([
	// 	auth.api.getSession({
	// 		headers: await headers(),
	// 	})]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Security</CardTitle>
				<CardDescription>Update your password and security preferences.</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<ChangePassword />
					<TwoFaPassword session={null} />
				</div>
			</CardContent>
		</Card>
	);
}
