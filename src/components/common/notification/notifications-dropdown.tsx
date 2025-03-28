'use client';

import {Button} from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {ScrollArea} from '@/components/ui/scroll-area';
import {Separator} from '@/components/ui/separator';
import {SelectNotification} from '@/db/schema';
import {disconnectSocket, socket} from '@/lib/socket/socket';
import {Bell} from 'lucide-react';
import {useEffect, useState} from 'react';
import {NotificationItem} from './notification-item';

// Mock notifications data
const initialNotifications: SelectNotification[] = [
	{
		id: '1',
		title: 'Order Ready to Ship',
		message: 'Order #12345 is packed and ready for shipping',
		type: 'shipping' as const,
		userId: 'user1',
		isRead: false,
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: '3',
		title: 'New Customer Registration',
		message: 'John Doe just created an account',
		type: 'user' as const,
		userId: 'user1',
		isRead: false,
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: '2',
		title: 'Low Stock Alert',
		message: "Product 'Gaming Mouse' is running low on stock",
		type: 'order' as const,
		userId: 'user1',
		isRead: true,
		createdAt: new Date(),
		updatedAt: new Date(),
	},
];

export function NotificationsDropdown() {
	const [notifications, setNotifications] = useState<SelectNotification[]>([]);
	const [unreadCount, setUnreadCount] = useState(0);

	useEffect(() => {
		setNotifications(initialNotifications);
		setUnreadCount(initialNotifications.filter((n) => !n.isRead).length);

		return () => {
			disconnectSocket();
		};
	}, []);

	const handleMarkAsRead = (id: string) => {
		setNotifications((prev) =>
			prev.map((notification) =>
				notification.id === id ? {...notification, read: true} : notification,
			),
		);
		setUnreadCount((prev) => Math.max(0, prev - 1));
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
					<Bell className="h-4 w-4" />
					{unreadCount > 0 && (
						<span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
							{unreadCount}
						</span>
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[380px]">
				<div className="flex items-center justify-between p-4">
					<h2 className="text-sm font-semibold">Notifications</h2>
					{unreadCount > 0 && (
						<span className="text-xs text-muted-foreground">{unreadCount} unread</span>
					)}
				</div>
				<Separator />
				<ScrollArea className="h-[300px]">
					{notifications.length > 0 ? (
						notifications.map((notification) => (
							<NotificationItem
								key={notification.id}
								type={notification.type as 'order' | 'delivery' | 'user' | 'system' | 'shipping'}
								title={notification.title}
								description={notification.message}
								timestamp={notification.createdAt}
								read={notification.isRead}
								onMarkAsRead={() => handleMarkAsRead(notification.id)}
							/>
						))
					) : (
						<div className="p-4 text-center text-sm text-muted-foreground">No notifications</div>
					)}
				</ScrollArea>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
