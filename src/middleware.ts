import {betterFetch} from '@better-fetch/fetch';
// import type {Session} from 'better-auth/types';
import {type NextRequest, NextResponse} from 'next/server';
import { Session } from './types/auth-types';

export async function middleware(request: NextRequest) {
	// Protect webhook routes from unauthorized access
	if (request.nextUrl.pathname === '/api/webhooks/stripe') {
		const signature = request.headers.get('stripe-signature');
		if (!signature) {
			return NextResponse.json({error: 'No signature provided'}, {status: 401});
		}
	}

	//  Set CORS headers for API routes
	if (request.nextUrl.pathname.startsWith('/api/')) {
		const response = NextResponse.next();
		response.headers.set('Access-Control-Allow-Origin', process.env.NEXT_PUBLIC_SITE_URL!);
		response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
		response.headers.set('Access-Control-Allow-Headers', 'Content-Type, stripe-signature');
		return response;
	}

	// Check for session
	const {data: session} = await betterFetch<Session>('/api/auth/get-session', {
		baseURL: request.nextUrl.origin,
		headers: {
			//get the cookie from the request
			cookie: request.headers.get('cookie') || '',
		},
	});

	if (!session) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		// Always run for API routes
		'/(api|trpc)(.*)',
	],
};
