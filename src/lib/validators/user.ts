import {z} from 'zod';

export const selectUserSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string().email(),
	role: z.string(),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters')
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
			'Password must contain at least one uppercase letter, one lowercase letter, and one number',
		),
});

export type SelectUserSchema = z.infer<typeof selectUserSchema>;

// export const profileFormSchema = z.object({
// 	firstName: z.string().min(3),
// 	lastName: z.string().min(3),
// 	email: z.string().email("Invalid email address."),
//   });

// export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
