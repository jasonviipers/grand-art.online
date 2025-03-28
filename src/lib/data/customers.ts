import {Customer} from '@/types/customer-type';

export const customers: Customer[] = [
	{
		id: 'CUST001',
		name: 'John Doe',
		email: 'john.doe@example.com',
		phone: '+1 (555) 123-4567',
		status: 'active',
		totalOrders: 15,
		totalSpent: 2499.99,
		lastPurchase: '2024-03-15',
		dateJoined: '2023-06-01',
	},
	{
		id: 'CUST002',
		name: 'Jane Smith',
		email: 'jane.smith@example.com',
		phone: '+1 (555) 234-5678',
		status: 'active',
		totalOrders: 8,
		totalSpent: 1299.99,
		lastPurchase: '2024-03-18',
		dateJoined: '2023-08-15',
	},
	{
		id: 'CUST003',
		name: 'Bob Wilson',
		email: 'bob.wilson@example.com',
		phone: '+1 (555) 345-6789',
		status: 'inactive',
		totalOrders: 3,
		totalSpent: 499.99,
		lastPurchase: '2023-12-20',
		dateJoined: '2023-10-01',
	},
];
