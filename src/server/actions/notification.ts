'use server';

import {db} from '@/db';
import {notification} from '@/db/schema';
import Logger from '@/lib/logger';
import {desc, eq} from 'drizzle-orm';

export async function dismissNotification(id: string) {
	try {
		await db.delete(notification).where(eq(notification.id, id));
	} catch (error) {
		Logger.error(`Error deleting notification: ${error}`);
	}
}

export async function getNotification() {
	try {
		const allNotifications = await db
			.select()
			.from(notification)
			.orderBy(desc(notification.createdAt));
		return allNotifications;
	} catch (error) {
		Logger.error(`Error getting notifications: ${error}`);
	}
}

export async function clearNotification() {
	try {
		await db.delete(notification);
	} catch (error) {
		Logger.error(`Error clearing notifications: ${error}`);
	}
}

export async function markNotificationAsRead(id: string) {
	try {
		await db.update(notification).set({isRead: true}).where(eq(notification.id, id));
	} catch (error) {
		Logger.error(`Error updating notification: ${error}`);
	}
}
