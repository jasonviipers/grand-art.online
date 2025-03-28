"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuthClient } from '@/lib/auth-client';
import { ShieldCheck, ShieldOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import TwoFaQRCodeDialog from './TwoFaQRCodeDialog';
import TwoFaPasswordDialog from './TwoFaPasswordDialog';
import { Session } from '@/types/auth-types';


interface TwoFaPasswordDialogProps {
	session: Session | null
}

export function TwoFaPassword({ session }: TwoFaPasswordDialogProps) {
	const [isPendingTwoFa, setIsPendingTwoFa] = useState(false);
	const [twoFactorVerifyURI, setTwoFactorVerifyURI] = useState<string | null>(null);
	const { toast } = useToast();

	const handleEnableDisable = async (password: string, isEnabling: boolean) => {
		setIsPendingTwoFa(true);
		const action = isEnabling ? 'enable' : 'disable';
		const toastMessage = isEnabling ? 'Enabled' : 'Disabled';

		try {
			if (isEnabling) {
				const response = await useAuthClient.twoFactor.enable({ password });
				setTwoFactorVerifyURI(response.data?.totpURI!);
			} else {
				await useAuthClient.twoFactor.disable({ password });
				toast({
					title: 'Success',
					description: `2FA ${toastMessage} successfully`,
				});
			}
		} catch (error: any) {
			toast({
				title: 'Error',
				description: error.message,
				variant: 'destructive',
			});
		} finally {
			setIsPendingTwoFa(false);
		}
	};

	return (
		<div className="flex flex-col gap-2">
			<p className="text-sm">Two Factor Authentication</p>
			<div className="flex gap-2">
				{/* QR Code Dialog */}
				{!!session?.user.twoFactorEnabled && (
					<TwoFaQRCodeDialog
						verifyURI={twoFactorVerifyURI}
						onShowQRCode={(password) => handleEnableDisable(password, true)}
					/>
				)}

				{/* Enable/Disable Dialog */}
				<TwoFaPasswordDialog
					isEnabling={!session?.user.twoFactorEnabled}
					isPending={isPendingTwoFa}
					onSubmit={(password) =>
						handleEnableDisable(password, !session?.user.twoFactorEnabled)
					}>

					<Button
						variant={session?.user.twoFactorEnabled ? 'destructive' : 'outline'}
						className="gap-2"
					>
						{session?.user.twoFactorEnabled ? <ShieldOff size={16} /> : <ShieldCheck size={16} />}
						<span className="md:text-sm text-xs">
							{session?.user.twoFactorEnabled ? 'Disable 2FA' : 'Enable 2FA'}
						</span>
					</Button>
				</TwoFaPasswordDialog>
			</div>
		</div>
	);
}
