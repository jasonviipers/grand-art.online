'use client';

import {OrderStatusBadge} from '@/components/orders/order-status-badge';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {type Order} from '@/types/order-type';
import {useQuery} from '@tanstack/react-query';

const recentOrders: (Omit<Order, 'total'> & {total: string})[] = [
	{
		id: '#12345',
		customer: 'John Doe',
		product: 'Nike Air Max 270',
		status: 'delivered',
		date: '2024-03-20',
		total: '$129.99',
	},
	{
		id: '#12346',
		customer: 'Jane Smith',
		product: 'Apple iPhone 13 Pro',
		status: 'processing',
		date: '2024-03-20',
		total: '$999.99',
	},
	{
		id: '#12347',
		customer: 'Bob Johnson',
		product: 'Samsung Galaxy S21',
		status: 'shipped',
		date: '2024-03-19',
		total: '$799.99',
	},
	{
		id: '#12348',
		customer: 'Alice Brown',
		product: 'Sony PlayStation 5',
		status: 'pending',
		date: '2024-03-19',
		total: '$499.99',
	},
];

const getRecentOrders = async () => {
	return recentOrders;
};

export function RecentOrders() {
	const {data, error, isLoading} = useQuery({
		queryKey: ['recent-orders'],
		queryFn: getRecentOrders,
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Orders</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Order ID</TableHead>
							<TableHead>Customer</TableHead>
							<TableHead>Product</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Date</TableHead>
							<TableHead className="text-right">Total</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data?.map((order) => (
							<TableRow key={order.id}>
								<TableCell>{order.id}</TableCell>
								<TableCell>{order.customer}</TableCell>
								<TableCell>{order.product}</TableCell>
								<TableCell>
									<OrderStatusBadge status={order.status} />
								</TableCell>
								<TableCell>{order.date}</TableCell>
								<TableCell className="text-right">{order.total}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
