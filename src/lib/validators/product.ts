import z from 'zod';

export const productSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	description: z.string().min(10, 'Description must be at least 10 characters'),
	price: z.number().min(0.01, 'Price must be a positive number'),
	category: z.string().min(1, 'Category is required'),
	status: z.enum(['in_stock', 'low_stock', 'out_of_stock']),
	sku: z.string().min(3, 'SKU must be at least 3 characters'),
	inventory: z.number().min(0, 'Inventory must be a non-negative number'),
	originalPrice: z.number().optional(),
	isPromotion: z.boolean().optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;
