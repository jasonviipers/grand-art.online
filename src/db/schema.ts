import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { boolean, decimal, integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	emailVerified: boolean('emailVerified').notNull(),
	image: text('image'),
	createdAt: timestamp('createdAt').notNull(),
	updatedAt: timestamp('updatedAt').notNull(),
	role: text('role'),
	banned: boolean('banned'),
	banReason: text('banReason'),
	banExpires: timestamp('banExpires'),
	twoFactorEnabled: boolean('twoFactorEnabled'),
	phone: text('phone'),
	status: text('status').notNull().default('active'), // e.g., 'active', 'inactive'
	totalOrders: integer('totalOrders').notNull().default(0),
	totalSpent: decimal('totalSpent', { precision: 10, scale: 2 }).notNull().default('0'),
	lastPurchase: timestamp('lastPurchase', { mode: 'date' }),
	dateJoined: timestamp('dateJoined', { mode: 'date' }).notNull().defaultNow(),
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	expiresAt: timestamp('expiresAt').notNull(),
	token: text('token').notNull().unique(),
	createdAt: timestamp('createdAt').notNull(),
	updatedAt: timestamp('updatedAt').notNull(),
	ipAddress: text('ipAddress'),
	userAgent: text('userAgent'),
	userId: text('userId').notNull().references(() => user.id),
	impersonatedBy: text('impersonatedBy'),
});

export const account = pgTable('account', {
	id: text('id').primaryKey(),
	accountId: text('accountId').notNull(),
	providerId: text('providerId').notNull(),
	userId: text('userId')
		.notNull()
		.references(() => user.id),
	accessToken: text('accessToken'),
	refreshToken: text('refreshToken'),
	idToken: text('idToken'),
	accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
	refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
	scope: text('scope'),
	password: text('password'),
	createdAt: timestamp('createdAt').notNull(),
	updatedAt: timestamp('updatedAt').notNull(),
});

export const verification = pgTable('verification', {
	id: text('id').primaryKey(),
	identifier: text('identifier').notNull(),
	value: text('value').notNull(),
	expiresAt: timestamp('expiresAt').notNull(),
	createdAt: timestamp('createdAt'),
	updatedAt: timestamp('updatedAt'),
});

export const twoFactor = pgTable('twoFactor', {
	id: text('id').primaryKey(),
	secret: text('secret').notNull(),
	backupCodes: text('backupCodes').notNull(),
	userId: text('userId')
		.notNull()
		.references(() => user.id),
});

export const notification = pgTable('notification', {
	id: text('id').primaryKey(),
	title: text('title').notNull(),
	message: text('message').notNull(),
	type: text('type').notNull(),
	userId: text('userId')
		.notNull()
		.references(() => user.id),
	isRead: boolean('isRead').notNull().default(false),
	createdAt: timestamp('createdAt', { mode: 'date' }).notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { mode: 'date' })
		.notNull()
		.$onUpdate(() => new Date()),
});

export const categories = pgTable('categories', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	description: text('description'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(() => new Date()),
});

export const products = pgTable('products', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	description: text('description'),
	stock: integer('stock').notNull(), // e.g., 'in_stock', 'low_stock', 'out_of_stock'
	price: decimal('price', { precision: 10, scale: 2 }).notNull(),
	image: text('image'),
	sku: text('sku').notNull().unique(),
	categoryId: text('categoryId')
		.notNull()
		.references(() => categories.id),
	isPromotion: boolean('isPromotion'),
	originalPrice: decimal('originalPrice', { precision: 10, scale: 2 }),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(() => new Date()),
});

export const orders = pgTable('orders', {
	id: text('id').primaryKey(),
	customer: text('customer')
		.notNull()
		.references(() => user.id),
	status: text('status').notNull(), // e.g., 'pending', 'processing', 'shipped', 'delivered'
	date: timestamp('date', { mode: 'date' }).notNull(),
	total: decimal('total', { precision: 10, scale: 2 }).notNull(),
});

export const orderItems = pgTable('orderItems', {
	id: text('id').primaryKey(),
	orderId: text('orderId')
		.notNull()
		.references(() => orders.id),
	productId: text('productId')
		.notNull()
		.references(() => products.id),
	quantity: integer('quantity').notNull(),
	price: decimal('price', { precision: 10, scale: 2 }).notNull(),
});

export const reviews = pgTable('reviews', {
	id: text('id').primaryKey(),
	productId: text('product')
		.notNull()
		.references(() => products.id),
	user: text('user')
		.notNull()
		.references(() => user.id),
	rating: integer('rating').notNull(),
	comment: text('comment'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(() => new Date()),
});

export const menuSections = pgTable('menuSections', {
	id: text('id').primaryKey(),
	location: text('location').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(() => new Date()),
});

export const menuItems = pgTable('menuItems', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	url: text('url').notNull(),
	parentId: text('parent_id'),
	order: integer('order').notNull(),
	isVisible: boolean('is_visible').notNull(),
	location: text('location').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at', { mode: 'date' }).$onUpdate(() => new Date()),
});

export type SelectNotification = InferSelectModel<typeof notification>;
export type InsertNotification = InferInsertModel<typeof notification>;
export type SelectUser = InferSelectModel<typeof user>;
export type InsertUser = InferInsertModel<typeof user>;
