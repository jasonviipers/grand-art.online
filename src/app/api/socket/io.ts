// api/socket/io.ts
import {Server as NetServer} from 'node:http';
import {SelectNotification} from '@/db/schema';
import Logger from '@/lib/logger';
import {NextApiResponseServerIo} from '@/types';
import {NextApiRequest} from 'next';
import {Server as IOServer} from 'socket.io';

export const config = {
	api: {
		bodyParser: false,
	},
};

export function socketHandler(_req: NextApiRequest, res: NextApiResponseServerIo) {
	if (!res.socket.server.io) {
		const httpServer: NetServer = res.socket.server as unknown as NetServer;
		const io = new IOServer(httpServer, {
			cors: {
				origin: '*',
				methods: ['GET', 'POST'],
			},
			path: '/api/socket/io',
			addTrailingSlash: true, // required for nextjs
		});
		io.on('connection', (socket) => {
			Logger.info(`Socket connected:${socket.id}`);

			// Mock shipping notification every 30 seconds
			const interval = setInterval(() => {
				const notification: SelectNotification = {
					id: Math.random().toString(36).substr(2, 9),
					title: 'New Order Ready to Ship',
					message: `Order #${Math.floor(Math.random() * 10000)} is ready for shipping!`,
					type: 'shipping',
					userId: 'user1',
					isRead: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				};
				io.emit('notification', notification);
			}, 30000);
			// Broadcast notification
			io.emit('notification', {
				message: 'New notification',
				type: 'success',
			});

			io.on('disconnect', () => {
				Logger.info(`Socket disconnected:${socket.id}`);
				clearInterval(interval);
			});
		});
		res.socket.server.io = io;
	}

	res.end();
}
