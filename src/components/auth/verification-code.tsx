'use client';

import {InputOTP, InputOTPGroup, InputOTPSlot} from '@/components/ui/input-otp';

interface VerificationCodeProps {
	length?: number;
	onComplete?: (code: string) => void;
	onChange?: (code: string) => void;
	value?: string;
}

export function VerificationCode({length = 6, onComplete, onChange, value}: VerificationCodeProps) {
	return (
		<div className="flex flex-col space-y-2">
			<div className="flex justify-center">
				<InputOTP
					name="code"
					onChange={onChange}
					value={value}
					maxLength={length}
					onComplete={onComplete}
				>
					<InputOTPGroup className="space-x-2">
						{[...Array(length)].map((_, index) => (
							<InputOTPSlot key={index} index={index} />
						))}
					</InputOTPGroup>
				</InputOTP>
			</div>
		</div>
	);
}
