import {Product} from '@/types/product-type';

export const products: Product[] = [
	{
		id: 'PROD001',
		name: 'Nike Air Max 270',
		description: "Men's Running Shoes",
		price: 129.99,
		category: 'Books',
		status: 'in_stock',
		sku: 'NK-AM270-001',
		inventory: 45,
		image:
			'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?auto=format&fit=crop&q=80&w=800&h=600',
		createdAt: '2024-01-15',
		updatedAt: '2024-03-20',
	},
	{
		id: 'PROD002',
		name: 'Apple iPhone 13 Pro',
		description: '256GB, Graphite',
		price: 399.99,
		originalPrice: 999.99,
		isPromotion: true,
		category: 'Electronics',
		status: 'low_stock',
		sku: 'AP-IP13P-256',
		inventory: 8,
		image:
			'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?auto=format&fit=crop&q=80&w=800&h=600',
		createdAt: '2024-02-01',
		updatedAt: '2024-03-19',
	},
	{
		id: 'PROD003',
		name: 'Sony PlayStation 5',
		description: 'Digital Edition',
		price: 399.99,
		category: 'Gaming',
		status: 'out_of_stock',
		sku: 'SN-PS5-DE',
		inventory: 0,
		image:
			'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?auto=format&fit=crop&q=80&w=800&h=600',
		createdAt: '2024-01-20',
		updatedAt: '2024-03-18',
	},
];
