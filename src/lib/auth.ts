import {db} from '@/db';
import {betterAuth} from 'better-auth';
import {drizzleAdapter} from 'better-auth/adapters/drizzle';
import {admin, twoFactor} from 'better-auth/plugins';
import {cookies} from 'next/headers';
import {sendMail} from './email/node-mailer';
import {
	renderEmailVerificationEmail,
	renderResetPasswordEmail,
	renderSendOTP,
	renderSendOTPEmail,
} from './renderEmail';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
	}),
	account: {
		accountLinking: {
			trustedProviders: ['google', 'github'],
		},
	},
	socialProviders: {
		github: {
			clientId: process.env.AUTH_GITHUB_ID!,
			clientSecret: process.env.AUTH_GITHUB_SECRET!,
			callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback/github`,
		},
		google: {
			clientId: process.env.AUTH_GOOGLE_ID!,
			clientSecret: process.env.AUTH_GOOGLE_SECRET!,
			callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback/google`,
		},
	},
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 60 * 60 * 24 * 7, // 7 days
		},
		expiresIn: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
	},
	cookies: {
		get: async () => {
			const cookieStore = await cookies();
			return cookieStore.getAll();
		},
	},
	user:{
		modelName: 'user',
	},
	rateLimit: {
		window: 60 * 60 * 24, // 1 day
		max: 100, // 10 requests per day
		customRules: {
			'/api/auth/callback/github': {
				max: 5, // 5 requests per minute
				window: 60, // 1 minute
			},
		},
	},
	emailAndPassword: {
		enabled: true,
		sendResetPassword: async ({user, url}) => {
			//You can use any email service to send the reset password email to the user
			//In this case, we'll use nodemailer to send the reset password email to the user's email
			const emailHtml = await renderResetPasswordEmail(user.name, url);
			await sendMail({
				to: user.email,
				from: process.env.MAILER_EMAIL,
				subject: 'Reset password',
				html: emailHtml,
			});
		},
		requireEmailVerification: true,
	},
	emailVerification: {
		sendVerificationEmail: async ({user, url}) => {
			//You can use any email service to send the verification email to the user
			//In this case, we'll use nodemailer to send the verification email to the user's email
			const emailHtml = await renderEmailVerificationEmail(user.name, url);
			await sendMail({
				to: user.email,
				from: process.env.MAILER_EMAIL,
				subject: 'Verify your email',
				html: emailHtml,
			});
		},
		//Enable this if sending verification emails is required
		sendOnSignUp: true,
	},
	plugins: [
		admin(),
		twoFactor({
			//Congiguration for 2FA
			otpOptions: {
				/**
				 * Defines how the OTP should be sent to the user.
				 * In this case, we'll use nodemailer to send the OTP to the user's email.
				 *
				 * @params user - The user object.
				 * @params otp - The OTP code.
				 * @returns void
				 */
				sendOTP: async ({user, otp}) => {
					console.log('OTP:', otp);
					//You can use any email service to send the OTP to the user
					//In this case, we'll use nodemailer to send the OTP to the user's email
					const emailHtml = await renderSendOTP(user.name, otp);
					await sendMail({
						to: user.email,
						from: process.env.MAILER_EMAIL,
						subject: 'Your OTP Code',
						html: emailHtml,
					});
				},
			},
			//Bypass 2FA verfication during the setup (for a smoother experience)
			skipVerificationOnEnable: false,
		}),
	],
});
