'use client';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {useQuery} from '@tanstack/react-query';

const topProducts = [
	{
		name: 'Nike Air Max 270',
		sales: 1234,
		revenue: '$12,340',
	},
	{
		name: 'Apple iPhone 13 Pro',
		sales: 890,
		revenue: '$89,000',
	},
	{
		name: 'Samsung Galaxy S21',
		sales: 756,
		revenue: '$75,600',
	},
	{
		name: 'Sony PlayStation 5',
		sales: 654,
		revenue: '$65,400',
	},
];

const getTopProducts = async () => {
	return topProducts;
};

export function TopProducts() {
	const {data, error, isLoading} = useQuery({
		queryKey: ['top-products'],
		queryFn: getTopProducts,
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Top Products</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Product</TableHead>
							<TableHead className="text-right">Sales</TableHead>
							<TableHead className="text-right">Revenue</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{data?.map((product) => (
							<TableRow key={product.name}>
								<TableCell>{product.name}</TableCell>
								<TableCell className="text-right">{product.sales}</TableCell>
								<TableCell className="text-right">{product.revenue}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
