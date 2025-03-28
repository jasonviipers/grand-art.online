export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	image?: string;
	category: string;
	status: 'in_stock' | 'low_stock' | 'out_of_stock';
	sku: string;
	inventory: number;
	isPromotion?: boolean;
	originalPrice?: number;
	createdAt: string;
	updatedAt: string;
}

export type ProductFormData = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

export interface Discount {
	code: string;
	description: string;
	type: 'percentage' | 'fixed';
	value: number;
	minAmount?: number;
	expiryDate?: Date;
}


// Types category
export const PRODUCT_CATEGORIES = [
	"All",
	"Books",
	"Prints",
	"Merchandise",
	"Limited Editions"
] as const

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]

// Checkout types 
export interface CheckoutFormData {
	firstName: string
	lastName: string
	email: string
	phone: string
	address: string
	city: string
	postalCode: string
	country: string
	cardNumber: string
	expiryDate: string
	cvv: string
  }