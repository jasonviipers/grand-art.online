'use client';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {useQuery} from '@tanstack/react-query';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const data = [
	{name: 'Jan', revenue: 4000},
	{name: 'Feb', revenue: 3000},
	{name: 'Mar', revenue: 2000},
	{name: 'Apr', revenue: 2780},
	{name: 'May', revenue: 1890},
	{name: 'Jun', revenue: 2390},
	{name: 'Jul', revenue: 3490},
];

const fetchRevenueChart = async () => {
	return data;
};
export function RevenueChart() {
	const {data, error, isLoading} = useQuery({
		queryKey: ['revenue-chart'],
		queryFn: fetchRevenueChart,
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<Card className="col-span-4">
			<CardHeader>
				<CardTitle>Revenue Over Time</CardTitle>
			</CardHeader>
			<CardContent className="h-[300px]">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
}
