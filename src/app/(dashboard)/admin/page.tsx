import {DashboardMetrics} from '@/components/admin/metrics';
import {RecentOrders} from '@/components/admin/recent-orders';
import {RevenueChart} from '@/components/admin/revenue-chart';
import {TopProducts} from '@/components/admin/top-products';
import {useAuthServer} from '@/lib/auth-server';
import {redirect} from 'next/navigation';
import React from 'react';

export default async function page() {
	const {session} = await useAuthServer();
	if (!session?.user || session.user.role !== 'admin') return redirect('/clients');
	return (
		<div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
			<div className="flex items-center justify-between space-y-2">
				<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
			</div>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<DashboardMetrics />
			</div>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
				<div className="col-span-4">
					<RevenueChart />
				</div>
				<div className="col-span-3">
					<TopProducts />
				</div>
			</div>
			<div className="grid gap-4">
				<RecentOrders />
			</div>
		</div>
	);
}
