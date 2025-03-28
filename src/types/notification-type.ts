export type NotificationType = 'order' | 'delivery' | 'user' | 'system';
export type NotificationPriority = 'low' | 'medium' | 'high';

export interface Notification {
	id: string;
	type: NotificationType;
	title: string;
	description: string;
	timestamp: string;
	read: boolean;
	priority: NotificationPriority;
	actionUrl?: string;
}

export type NotificationFormData = Omit<Notification, 'id' | 'timestamp' | 'read'>;
