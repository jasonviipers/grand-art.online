import {AuthSocialButton} from '@/components/auth/auth-social-button';
import {Github} from 'lucide-react';

export function AuthSocialButtons() {
	return (
		<div className="grid grid-cols-2 gap-4">
			<AuthSocialButton provider="google" />
			<AuthSocialButton provider="github" icon={Github} />
		</div>
	);
}
