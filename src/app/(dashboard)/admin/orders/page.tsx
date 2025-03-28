import {columns} from '@/components/orders/columns';
import {DataTable} from '@/components/orders/data-table';
import {orderData} from '@/lib/data/orders';

export default function OrderPage() {
	return (
		<div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
			<div className="flex items-center justify-between space-y-2">
				<h2 className="text-3xl font-bold tracking-tight">Orders</h2>
			</div>
			{/* <DataTable data={orderData} columns={columns} /> */}
		</div>
	);
}
