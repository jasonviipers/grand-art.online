'use client';
import { FormInput } from '@/components/form/form-input';
import { PasswordInput } from '@/components/form/password-input';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { useAuthClient } from '@/lib/auth-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const passwordFormSchema = z
	.object({
		currentPassword: z.string().min(8, 'Password must be at least 8 characters.'),
		newPassword: z.string().min(8, 'Password must be at least 8 characters.'),
		confirmPassword: z.string(),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

type PasswordFormValues = z.infer<typeof passwordFormSchema>;

export function ChangePassword() {
	const [currentPassword, setCurrentPassword] = useState<string>('');
	const [newPassword, setNewPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
	const [signOutDevices, setSignOutDevices] = useState<boolean>(false);
	
	const { toast } = useToast();
	const form = useForm<PasswordFormValues>({
		resolver: zodResolver(passwordFormSchema),
	});


	async function onSubmit(data: PasswordFormValues) {
		if (newPassword !== confirmPassword) {
			toast({
				title: 'Error',
				description: 'Passwords do not match',
				variant: 'destructive',
			});
			return;
		}

		if (newPassword.length < 8) {
			toast({
				title: 'Error',
				description: 'Password must be at least 8 characters',
				variant: 'destructive',
			});
			return;
		}

		setLoading(true);
		const res = await useAuthClient.changePassword({
			currentPassword: data.currentPassword,
			newPassword: data.newPassword,
			revokeOtherSessions: signOutDevices,
		});
		setLoading(false);
		if (res.error) {
			toast({
				title: 'Error',
				description: res.error.message || "Couldn't change your password! Make sure it's correct",
				variant: 'destructive',
			});
		} else {
			setOpen(false);
			toast({
				title: 'Password updated',
				description: 'Your password has been changed successfully.',
			});
			setCurrentPassword('');
			setNewPassword('');
			setConfirmPassword('');
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="gap-2 z-10" variant="outline" size="sm">
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M2.5 18.5v-1h19v1zm.535-5.973l-.762-.442l.965-1.693h-1.93v-.884h1.93l-.965-1.642l.762-.443L4 9.066l.966-1.643l.761.443l-.965 1.642h1.93v.884h-1.93l.965 1.693l-.762.442L4 10.835zm8 0l-.762-.442l.966-1.693H9.308v-.884h1.93l-.965-1.642l.762-.443L12 9.066l.966-1.643l.761.443l-.965 1.642h1.93v.884h-1.93l.965 1.693l-.762.442L12 10.835zm8 0l-.762-.442l.966-1.693h-1.931v-.884h1.93l-.965-1.642l.762-.443L20 9.066l.966-1.643l.761.443l-.965 1.642h1.93v.884h-1.93l.965 1.693l-.762.442L20 10.835z"
						></path>
					</svg>
					<span className="text-sm text-muted-foreground">Change Password</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] w-11/12">
				<DialogHeader>
					<DialogTitle>Change Password</DialogTitle>
					<DialogDescription>Change your password</DialogDescription>
				</DialogHeader>
				<div className="grid gap-2">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<PasswordInput
								id="current-password"
								value={currentPassword}
								onChange={(e: any) => setCurrentPassword(e.target.value)}
								autoComplete="new-password"
								placeholder="Password"
							/>
							<PasswordInput
								value={newPassword}
								onChange={(e: any) => setNewPassword(e.target.value)}
								autoComplete="new-password"
								placeholder="New Password"
							/>
							<PasswordInput
								value={confirmPassword}
								onChange={(e: any) => setConfirmPassword(e.target.value)}
								autoComplete="new-password"
								placeholder="Confirm Password"
							/>
							<div className="flex gap-2 items-center">
								<Switch
									checked={signOutDevices}
									onCheckedChange={(checked) =>
										checked ? setSignOutDevices(true) : setSignOutDevices(false)
									}
								/>
								<p className="text-sm">Sign out from other devices</p>
							</div>
							<DialogFooter>
								<Button type="submit">
									{loading ? <Loader2 size={15} className="animate-spin" /> : 'Change Password'}
								</Button>
							</DialogFooter>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	);
}
