'use client';

import {Button} from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Customer} from '@/types/customer-type';
import {MoreHorizontal, Pencil, Trash2} from 'lucide-react';
import {useState} from 'react';
import {CustomerDialog} from './customer-dialog';
import {DeleteCustomerDialog} from './delete-customer-dialog';

interface CustomerActionsProps {
	customer: Customer;
}

export function CustomerActions({customer}: CustomerActionsProps) {
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

			<CustomerDialog customer={customer} open={showEditDialog} onOpenChange={setShowEditDialog} />

			<DeleteCustomerDialog
				customer={customer}
				open={showDeleteDialog}
				onOpenChange={setShowDeleteDialog}
			/>
		</>
	);
}
