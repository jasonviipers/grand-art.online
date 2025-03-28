'use client';

import {Button} from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Product} from '@/types/product-type';
import {MoreHorizontal, Pencil, Trash2} from 'lucide-react';
import {useState} from 'react';
import {DeleteProductDialog} from './delete-product-dialog';
import {ProductDialog} from './product-dialog';

interface ProductActionsProps {
	product: Product;
}

export function ProductActions({product}: ProductActionsProps) {
	const [showEditDialog, setShowEditDialog] = useState(false);
	const [showDeleteDialog, setShowDeleteDialog] = useState(false);

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="h-8 w-8 p-0">
						<span className="sr-only">Open menu</span>
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onClick={() => setShowEditDialog(true)}>
						<Pencil className="mr-2 h-4 w-4" />
						Edit
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setShowDeleteDialog(true)} className="text-destructive">
						<Trash2 className="mr-2 h-4 w-4" />
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<ProductDialog product={product} open={showEditDialog} onOpenChange={setShowEditDialog} />

			<DeleteProductDialog
				product={product}
				open={showDeleteDialog}
				onOpenChange={setShowDeleteDialog}
			/>
		</>
	);
}
