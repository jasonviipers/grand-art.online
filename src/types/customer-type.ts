export interface Customer {
	id: string;
	name: string;
	email: string;
	phone: string;
	status: 'active' | 'inactive';
	totalOrders: number;
	totalSpent: number;
	lastPurchase: string;
	dateJoined: string;
}

export type CustomerFormData = Omit<Customer, 'id' | 'totalOrders' | 'totalSpent' | 'lastPurchase'>;
