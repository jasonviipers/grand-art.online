'use client';

import {formatCurrency} from '@/lib/utils';
import {type Order} from '@/types/order-type';
import {ColumnDef} from '@tanstack/react-table';
import {OrderStatusBadge} from './order-status-badge';

export const columns: ColumnDef<Order>[] = [
	{
		accessorKey: 'id',
		header: 'Order ID',
		accessorFn: (row) => row.id,
	},
	{
		accessorKey: 'customer',
		header: 'Customer',
		accessorFn: (row) => row.customer,
	},
	{
		accessorKey: 'product',
		header: 'Product',
		accessorFn: (row) => row.product,
	},
	{
		accessorKey: 'status',
		header: 'Status',
		cell: ({row}) => {
			const status = row.getValue('status') as Order['status'];
			return <OrderStatusBadge status={status} />;
		},
		accessorFn: (row) => row.status,
	},
	{
		accessorKey: 'date',
		header: 'Date',
		accessorFn: (row) => row.date,
	},
	{
		accessorKey: 'total',
		header: 'Total',
		accessorFn: (row) => row.total,
		cell: ({row}) => {
			const amount = parseFloat(row.getValue('total'));
			return formatCurrency(amount);
		},
	},
];
