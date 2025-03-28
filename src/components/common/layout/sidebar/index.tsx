import { auth } from '@/lib/auth';
import { BrandLogo } from '../../logo';
import { NavLinks } from './nav-links';
import { headers } from 'next/headers';
import { db } from '@/db';


export async function Sidebar() {
	const [session] = await Promise.all([
		auth.api.getSession({
			headers: await headers(),
		})]);

	const getUser = async () => {
		if (!session?.user) return null;
		return await db.query.user.findFirst({
			where: (user, { eq }) => eq(user.id, session.user.id),
		});
	}

	const user = (await getUser()) ?? null;

	return (
		<div className="hidden border-r bg-muted/40 md:block">
			<div className="flex h-full max-h-screen flex-col gap-2">
				<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<BrandLogo />
				</div>
				<div className="flex-1">
					<NavLinks data={user} />
				</div>
				<div className="mt-auto p-4">{/* <UpgradeCard /> */}</div>
			</div>
		</div>
	);
}
