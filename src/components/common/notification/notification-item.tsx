'use client';

import {cn, formatTimeAgo} from '@/lib/utils';
import {Check, Package, ShoppingCart, Truck, User} from 'lucide-react';

interface NotificationItemProps {
	type: 'order' | 'shipping' | 'user' | 'system' | 'delivery';
	title: string;
	description: string;
	timestamp: Date;
	read: boolean;
	onMarkAsRead: () => void;
}

const iconMap = {
	order: ShoppingCart,
	delivery: Package,
	user: User,
	system: Check,
	shipping: Truck,
};

export function NotificationItem({
	type,
	title,
	description,
	timestamp,
	read,
	onMarkAsRead,
}: NotificationItemProps) {
	const Icon = iconMap[type];

	return (
		<div
			className={cn(
				'flex items-start gap-4 p-4 hover:bg-muted/50 cursor-pointer',
				!read && 'bg-muted/30',
			)}
			onClick={onMarkAsRead}
		>
			<div className="rounded-full bg-primary/10 p-2">
				<Icon className="h-4 w-4 text-primary" />
			</div>
			<div className="flex-1 space-y-1">
				<p className="text-sm font-medium leading-none">{title}</p>
				<p className="text-sm text-muted-foreground">{description}</p>
				<p className="text-xs text-muted-foreground">{formatTimeAgo(timestamp)}</p>
			</div>
		</div>
	);
}
