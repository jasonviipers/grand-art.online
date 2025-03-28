'use client';

import {Badge} from '@/components/ui/badge';
import {formatCurrency} from '@/lib/utils';
import {Customer} from '@/types/customer-type';
import {ColumnDef} from '@tanstack/react-table';
import {format} from 'date-fns';
import {CustomerActions} from './customer-actions';

export const columns: ColumnDef<Customer>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'email',
		header: 'Email',
	},
	{
		accessorKey: 'phone',
		header: 'Phone',
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({row}) => {
			const status = row.getValue('status') as string;
			return (
				<Badge variant={status === 'active' ? 'success' : 'secondary'} className="capitalize">
					{status}
				</Badge>
			);
		},
	},
	{
		accessorKey: 'totalOrders',
		header: 'Orders',
	},
	{
		accessorKey: 'totalSpent',
		header: 'Total Spent',
		cell: ({row}) => {
			const amount = parseFloat(row.getValue('totalSpent'));
			return formatCurrency(amount);
		},
	},
	{
		accessorKey: 'lastPurchase',
		header: 'Last Purchase',
		cell: ({row}) => {
			const date = row.getValue('lastPurchase') as string;
			return format(new Date(date), 'MMM d, yyyy');
		},
	},
	{
		id: 'actions',
		cell: ({row}) => {
			return <CustomerActions customer={row.original} />;
		},
	},
];
