import {render} from '@react-email/render';
import {ResetPasswordEmail} from './email/reset-password-email';
import {SendOTPEmail} from './email/send-opt-email';
import {SendOTP} from './email/send-otp-email';
import {EmailVerificationEmail} from './email/verification-email';

export const renderResetPasswordEmail = async (
	name: string,
	resetLink: string,
): Promise<string> => {
	const emailComponent = <ResetPasswordEmail name={name} resetLink={resetLink} />;
	return render(emailComponent);
};

export const renderEmailVerificationEmail = async (name: string, url: string): Promise<string> => {
	const emailComponent = <EmailVerificationEmail name={name} verificationLink={url} />;
	return render(emailComponent);
};

export const renderSendOTP = async (name: string, otp: string): Promise<string> => {
	const emailComponent = <SendOTP name={name} otp={otp} />;
	return render(emailComponent);
};

export const renderSendOTPEmail = async (email: string, otp: string): Promise<string> => {
	const emailComponent = <SendOTPEmail email={email} otp={otp} />;
	return render(emailComponent);
};
