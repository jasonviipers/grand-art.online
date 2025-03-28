'use client';

import {Button} from '@/components/ui/button';
import {useAuthClient} from '@/lib/auth-client';
import {LucideIcon} from 'lucide-react';

interface AuthSocialButtonProps {
	provider: 'google' | 'github';
	icon?: LucideIcon;
}

export function AuthSocialButton({provider, icon: Icon}: AuthSocialButtonProps) {
	const handleOnClick = async () => {
		console.log(`Sign in with ${provider}`);
		await useAuthClient.signIn.social({provider});
	};
	return (
		<Button variant="outline" className="w-full" onClick={handleOnClick}>
			{Icon && <Icon className="h-5 w-5 mr-2" />}
			{provider.charAt(0).toUpperCase() + provider.slice(1)}
		</Button>
	);
}
