import {BrandLogo} from '@/components/common/logo';
import {useAuthServer} from '@/lib/auth-server';
import {redirect} from 'next/navigation';

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// make sure if the user is logged in, they cannot access this page
	const {session} = await useAuthServer();
	if (session?.user) return redirect('/');
	// useEffect(() => {
	// 	const checkSession = async () => {
	// 		const {session} = await useAuthServer();
	// 		if (session?.user) {
	// 			redirect('/');
	// 		}
	// 	};
	// 	checkSession();
	// }, []);
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="w-full max-w-md">
				<div className="flex justify-center mb-8">
					<BrandLogo />
				</div>
				{children}
			</div>
		</div>
	);
}
