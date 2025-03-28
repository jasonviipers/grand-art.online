export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered';

export interface Order {
	id: string;
	customer: string;
	product: string;
	status: OrderStatus;
	date: string;
	total: number;
}
