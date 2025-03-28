'use server';

import { db } from '@/db';
import Logger from '@/lib/logger';

export async function fetchUserById(id: string) {
	try {
		const user = await db.query.user.findFirst({
			where: (user, { eq }) => eq(user.id, id),
		});
		return user;
	} catch (error) {
		Logger.error('Failed to fetch user: ' + error);
		return null;
	}
}

// export async function fetchProfile() {
// 	try {
// 		const session = await useAuthServer();
// 		if (!session.user) {
// 			return null;
// 		}

// 		const profile = await db
// 			.select({
// 				name: user.name,
// 				email: user.email,
// 			})
// 			.from(user)
// 			.where(eq(user.id, session.user.id))
// 			.limit(1);

// 		if (!profile.length) {
// 			throw new Error('Profile not found');
// 		}

// 		const [currentProfile] = profile;

// 		// Split full name into first and last names (if necessary)
// 		const [firstName, ...lastNameParts] = currentProfile.name.split(' ');
// 		const lastName = lastNameParts.join(' ');

// 		return {firstName, lastName, email: currentProfile.email};
// 	} catch (error) {
// 		Logger.error('Failed to fetch profile: ' + error);
// 		return null;
// 	}
// }

// // Update the profile
// export async function updateProfile(data: ProfileFormSchema) {
// 	try {
// 		const session = await useAuthServer();
// 		if (!session.user) {
// 			return null;
// 		}

// 		const info = profileFormSchema.parse(data);

// 		await db
// 			.update(user)
// 			.set({
// 				name: `${info.firstName} ${info.lastName}`,
// 				email: info.email,
// 			})
// 			.where(eq(user.id, session.user.id));

// 		return {
// 			success: true,
// 			message: 'Profile updated successfully',
// 		};
// 	} catch (error) {
// 		Logger.error('Failed to update profile: ' + error);
// 		return {
// 			success: false,
// 			message: error instanceof Error ? error.message : 'Failed to update profile',
// 		};
// 	}
// }
