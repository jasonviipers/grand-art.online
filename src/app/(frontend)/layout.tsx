import { Footer } from '@/components/common/footer/footer';
import { Navigation } from '@/components/common/navigations/navigation';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

interface FrontendLayoutProps {
	children: React.ReactNode;
}
export default async function FrontendLayout({ children }: FrontendLayoutProps) {
	const [session] = await Promise.all([
		auth.api.getSession({
			headers: await headers(),
		})]);
	return (
		<>
			<Navigation data={session} />
			{children}
			<Footer />
		</>
	);
}
