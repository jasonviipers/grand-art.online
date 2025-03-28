'use client';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {useToast} from '@/hooks/use-toast';
import {Customer} from '@/types/customer-type';

interface DeleteCustomerDialogProps {
	customer: Customer;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function DeleteCustomerDialog({customer, open, onOpenChange}: DeleteCustomerDialogProps) {
	const {toast} = useToast();

	const handleDelete = async () => {
		try {
			// In a real app, you would make an API call here
			console.log('Deleting customer:', customer.id);
			toast({
				title: 'Customer deleted',
				description: `Successfully deleted ${customer.name}`,
			});
			onOpenChange(false);
		} catch (_error) {
			toast({
				title: 'Error',
				description: 'Something went wrong. Please try again.',
				variant: 'destructive',
			});
		}
	};

	return (
		<AlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Delete Customer</AlertDialogTitle>
					<AlertDialogDescription>
						Are you sure you want to delete {customer.name}? This action cannot be undone.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction
						onClick={handleDelete}
						className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
					>
						Delete
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
