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
import {Product} from '@/types/product-type';

interface DeleteProductDialogProps {
	product: Product;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function DeleteProductDialog({product, open, onOpenChange}: DeleteProductDialogProps) {
	const {toast} = useToast();

	const handleDelete = async () => {
		try {
			// In a real app, you would make an API call here
			console.log('Deleting product:', product.id);
			toast({
				title: 'Product deleted',
				description: `Successfully deleted ${product.name}`,
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
					<AlertDialogTitle>Delete Product</AlertDialogTitle>
					<AlertDialogDescription>
						Are you sure you want to delete {product.name}? This action cannot be undone.
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
