'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {useToast} from '@/hooks/use-toast';
import {useAuthClient} from '@/lib/auth-client';
import {Edit, Loader2} from 'lucide-react';
import {useRouter} from 'next/navigation';
import {useState} from 'react';

export function ProfileSettings() {
	const {toast} = useToast();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
	const [name, setName] = useState<string>();

	const onSubmit = async () => {
		setIsLoading(true);
		await useAuthClient.updateUser({
			name: name ? name : undefined,
			fetchOptions: {
				onSuccess: () => {
					toast({
						title: 'User updated successfully',
						variant: 'default',
					});
				},
				onError: (error) => {
					toast({
						title: 'Error',
						description: error.error.message,
						variant: 'destructive',
					});
				},
			},
		});
		setName('');
		router.refresh();
		setIsLoading(false);
		setOpen(false);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Profile</CardTitle>
				<CardDescription>Manage your profile information and preferences.</CardDescription>
			</CardHeader>
			<CardContent>
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogTrigger asChild>
						<Button size="sm" className="gap-2" variant="secondary">
							<Edit size={13} />
							Edit User
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px] w-11/12">
						<DialogHeader>
							<DialogTitle>Edit User</DialogTitle>
							<DialogDescription>Edit user information</DialogDescription>
						</DialogHeader>
						<div className="grid gap-2">
							<Label htmlFor="name">Full Name</Label>
							{/* <Input
								id="name"
								type="name"
								placeholder={data?.name}
								required
								onChange={(e) => {
									setName(e.target.value);
								}}
							/> */}
						</div>
						<DialogFooter>
							<Button disabled={isLoading} onClick={onSubmit}>
								{isLoading ? <Loader2 size={15} className="animate-spin" /> : 'Update'}
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</CardContent>
		</Card>
	);
}
