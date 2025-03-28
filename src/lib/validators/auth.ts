import {z} from 'zod';

export const signupSchema = z.object({
	firstName: z.string().min(3),
	lastName: z.string().min(3),
	email: z.string().email(),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters')
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
			'Password must contain at least one uppercase letter, one lowercase letter, and one number',
		),
});

export const signinSchema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters')
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
			'Password must contain at least one uppercase letter, one lowercase letter, and one number',
		),
});

export const forgotPasswordSchema = z.object({
	email: z.string().email(),
});

export const resetPasswordSchema = z
	.object({
		password: z
			.string()
			.min(8, 'Password must be at least 8 characters')
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
				'Password must contain at least one uppercase letter, one lowercase letter, and one number',
			),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	});

export const changePasswordSchema = z.object({
	oldPassword: z.string().min(8),
	newPassword: z
		.string()
		.min(8, 'Password must be at least 8 characters')
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
			'Password must contain at least one uppercase letter, one lowercase letter, and one number',
		),
});

export const changeEmailSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export const changeFullNameSchema = z.object({
	fullName: z.string().min(3),
});

export const verifyEmailSchema = z.object({
	code: z
		.string()
		.min(6, 'Verification code must be 6 digits')
		.max(6, 'Verification code must be 6 digits')
		.regex(/^\d+$/, 'Verification code must only contain numbers'),
});

// export const passwordFormSchema = z.object({
// 	currentPassword: z.string().min(8, 'Password must be at least 8 characters'),
// 	newPassword: z.string().min(8, 'Password must be at least 8 characters'),
// 	confirmPassword: z.string(),
// }).refine((data) => data.newPassword === data.confirmPassword, {
// 	message: "Passwords don't match",
// 	path: ['confirmPassword'],
// });
export type ChangeFullNameSchema = z.infer<typeof changeFullNameSchema>;
export type ChangeEmailSchema = z.infer<typeof changeEmailSchema>;
export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type SignInSchema = z.infer<typeof signinSchema>;
export type SignUpSchema = z.infer<typeof signupSchema>;
export type VerifyEmailSchema = z.infer<typeof verifyEmailSchema>;

export type AuthSchema =
	| SignInSchema
	| SignUpSchema
	| ForgotPasswordSchema
	| ResetPasswordSchema
	| ChangePasswordSchema
	| ChangeEmailSchema
	| ChangeFullNameSchema
	| VerifyEmailSchema;
