import { toast } from '@/hooks/use-toast';
import { createAuthClient } from 'better-auth/client';
import { adminClient, twoFactorClient } from 'better-auth/client/plugins';

export const useAuthClient = createAuthClient({
	baseURL: process.env.NEXT_PUBLIC_SITE_URL!,
	provider: ['google', 'github'],
	fetchOptions: {
		onError(e) {
			if (e.error.status === 429) {
				toast({
					title: 'Too Many Requests',
					description: 'Please try again later.',
					duration: 3000,
					variant: 'destructive',
				});
			} else if (e.error.status >= 500) {
				toast({
					title: 'Server Error',
					description: 'An error occurred on the server. Please try again later.',
					duration: 3000,
					variant: 'destructive',
				});
			} else if (e.error.status >= 400) {
				toast({
					title: 'Error',
					description: e.error.message || 'An error occurred. Please try again.',
					duration: 3000,
					variant: 'destructive',
				});
			}
		},
	},
	plugins: [
		adminClient(),
		twoFactorClient({
			onTwoFactorRedirect() {
				window.location.href = '/two-factor';
			},
		}),
	],
});

export const {
	signUp,
	signIn,
	signOut,
	useSession,
	twoFactor,
	forgetPassword,
	updateUser,
} = useAuthClient;