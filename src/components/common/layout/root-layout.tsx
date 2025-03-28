import { Toaster } from '@/components/ui/toaster';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function RootLayout({ children }: { children: React.ReactNode }) {

	const [session] = await Promise.all([
		auth.api.getSession({
			headers: await headers(),
		})]);

	return (
		<>
			<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
				<Sidebar />
				<div className="flex flex-col">
					<Header data={session} />
					<main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">{children}</main>
				</div>
			</div>
			<Toaster />
		</>
	);
}
