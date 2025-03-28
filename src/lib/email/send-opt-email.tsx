import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Tailwind,
	Text,
} from '@react-email/components';
import * as React from 'react';
import {appName} from './reset-password-email';

interface SendOTPEmailProps {
	email: string;
	otp: string;
}
export function SendOTPEmail({email, otp}: SendOTPEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>
				Hi {email}, your OTP code is {otp}.
			</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans px-2">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
						<Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
							Your <strong>{appName}</strong> OTP Code
						</Heading>
						<Text className="text-black text-[14px] leading-[24px]">Hello {email},</Text>
						<Text className="text-black text-[14px] leading-[24px]">
							Your OTP code for {appName} is:
						</Text>
						<Text className="text-black text-[24px] font-bold leading-[24px] text-center my-[20px]">
							{otp}
						</Text>
						<Text className="text-black text-[14px] leading-[24px]">
							Please use this code to complete your verification process.
						</Text>
						<Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
						<Text className="text-[#666666] text-[12px] leading-[24px]">
							If you didn't request this OTP, please ignore this email or contact support if you
							have concerns.
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
