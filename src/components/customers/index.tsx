'use client';
import {columns} from '@/components/customers/columns';
import {CustomerDialog} from '@/components/customers/customer-dialog';
import {DataTable} from '@/components/customers/data-table';
import {Button} from '@/components/ui/button';
import {useAuthClient} from '@/lib/auth-client';
import {customers} from '@/lib/data/customers';
import {useQuery} from '@tanstack/react-query';
import {Plus} from 'lucide-react';
import {useState} from 'react';

export default function CustomerIndex() {
	const [showAddDialog, setShowAddDialog] = useState(false);
	// const { data, isLoading } = useQuery({
	//     queryKey: ['customers'],
	//     queryFn: async () => {
	//         const customer = await useAuthClient.admin.listUsers({
	//             query: {
	//                 limit: 10,
	//                 sortBy: "createdAt",
	//                 sortDirection: "desc",
	//             }
	//         },{
	//             throw: true,
	//         },)
	//     }
	// })
	// if (isLoading) return <div>Loading...</div>

	return (
		<div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
			<div className="flex items-center justify-between">
				<h2 className="text-3xl font-bold tracking-tight">Customers</h2>
				<Button onClick={() => setShowAddDialog(true)}>
					<Plus className="mr-2 h-4 w-4" />
					Add Customer
				</Button>
			</div>
			<DataTable data={customers} columns={columns} />
			<CustomerDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
		</div>
	);
}
