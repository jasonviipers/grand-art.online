import { RootLayout } from '@/components/common/layout/root-layout';
import { db } from '@/db';
import { auth } from '@/lib/auth';
import { useAuthServer } from '@/lib/auth-server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

interface Props {
	children: React.ReactNode;
}

export default async function layout({ children }: Props) {
	const [session] = await Promise.all([
		auth.api.getSession({
			headers: await headers(),
		})]);
	// //if the user is not logged in, redirect to the sign-in page if the has the role of admin go to the admin dashboard
	if (!session?.user) return redirect('/sign-in');
	// if (session.user.role !== 'admin') return redirect('/client');

	// const getUser = async () => {
	// 	if (!session?.user) return null;
	// 	return await db.query.user.findFirst({
	// 		where: (user, { eq }) => eq(user.id, session.user.id),
	// 	});
	// }

	// const user = (await getUser()) ?? null;

	return <RootLayout>{children}</RootLayout>;
}
