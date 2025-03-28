'use client';

import {io} from 'socket.io-client';

const SERVER_URL = process.env.NEXT_PUBLIC_SITE_URL!;
export const socket = io(SERVER_URL, {
	autoConnect: false,
});

export function connectSocket() {
	if (socket.connected) return;
	socket.connect();
}

export function disconnectSocket() {
	if (!socket.connected) return;
	socket.disconnect();
}
