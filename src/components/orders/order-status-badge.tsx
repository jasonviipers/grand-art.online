'use client';

import {Badge} from '@/components/ui/badge';
import {cn} from '@/lib/utils';
import {type OrderStatus} from '@/types/order-type';

interface OrderStatusBadgeProps {
	status: OrderStatus;
}

const statusStyles = {
	delivered: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
	processing: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
	shipped: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
	pending: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
} as const;

export function OrderStatusBadge({status}: OrderStatusBadgeProps) {
	return (
		<Badge variant="secondary" className={cn('capitalize', statusStyles[status])}>
			{status}
		</Badge>
	);
}
