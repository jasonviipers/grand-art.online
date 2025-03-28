'use client';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {useQuery} from '@tanstack/react-query';
import {DollarSign, ShoppingBag, TrendingUp, Users} from 'lucide-react';

const metrics = [
	{
		title: 'Total Revenue',
		value: '$45,231.89',
		icon: DollarSign,
		change: '+20.1%',
		trend: 'up',
	},
	{
		title: 'New Customers',
		value: '1,234',
		icon: Users,
		change: '+15.3%',
		trend: 'up',
	},
	{
		title: 'Total Orders',
		value: '12,345',
		icon: ShoppingBag,
		change: '+12.2%',
		trend: 'up',
	},
	{
		title: 'Growth Rate',
		value: '23.8%',
		icon: TrendingUp,
		change: '+4.3%',
		trend: 'up',
	},
];

const getDashboardMetrics = async () => {
	return metrics;
};

export function DashboardMetrics() {
	const {data, error, isLoading} = useQuery({
		queryKey: ['dashboard-metrics'],
		queryFn: getDashboardMetrics,
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
	return (
		<>
			{data?.map((metric, index) => {
				const Icon = metric.icon;
				return (
					<Card key={index}>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
							<Icon className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{metric.value}</div>
							<p className="text-xs text-muted-foreground">
								<span className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
									{metric.change}
								</span>{' '}
								from last month
							</p>
						</CardContent>
					</Card>
				);
			})}
		</>
	);
}
