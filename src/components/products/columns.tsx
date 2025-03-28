'use client';

import {Badge} from '@/components/ui/badge';
import {formatCurrency} from '@/lib/utils';
import {Product} from '@/types/product-type';
import {ColumnDef} from '@tanstack/react-table';
import {format} from 'date-fns';
import {ProductActions} from './product-actions';

const statusStyles = {
	in_stock: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
	low_stock: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
	out_of_stock: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
} as const;

export const columns: ColumnDef<Product>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'category',
		header: 'Category',
	},
	{
		accessorKey: 'price',
		header: 'Price',
		cell: ({row}) => {
			const amount = parseFloat(row.getValue('price'));
			return formatCurrency(amount);
		},
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({row}) => {
			const status = row.getValue('status') as Product['status'];
			return (
				<Badge variant="secondary" className={statusStyles[status]}>
					{status.replace('_', ' ')}
				</Badge>
			);
		},
	},
	{
		accessorKey: 'inventory',
		header: 'Stock',
	},
	{
		accessorKey: 'sku',
		header: 'SKU',
	},
	{
		accessorKey: 'updatedAt',
		header: 'Last Updated',
		cell: ({row}) => {
			const date = row.getValue('updatedAt') as string;
			return format(new Date(date), 'MMM d, yyyy');
		},
	},
	{
		id: 'actions',
		cell: ({row}) => {
			return <ProductActions product={row.original} />;
		},
	},
];
