// type
import {Server as NetServer, Socket} from 'net';
import {SelectNotification, SelectUser} from '@/db/schema';
import {NextApiResponse} from 'next';
import {Server as SocketIOServer} from 'socket.io';

export type ServerWithNotification = SelectNotification & {
	users: SelectUser & {notifications: SelectNotification[]};
};

export type NextApiResponseServerIo = NextApiResponse & {
	socket: Socket & {
		server: NetServer & {
			io: SocketIOServer;
		};
	};
};


