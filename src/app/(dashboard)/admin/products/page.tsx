'use client';

import {DataTable} from '@/components/customers/data-table';
import {columns} from '@/components/products/columns';
import {ProductDialog} from '@/components/products/product-dialog';
import {Button} from '@/components/ui/button';
import {products} from '@/lib/data/products';
import {Plus} from 'lucide-react';
import {useState} from 'react';

export default function ProductsPage() {
	const [showAddDialog, setShowAddDialog] = useState(false);

	return (
		<div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
			<div className="flex items-center justify-between">
				<h2 className="text-3xl font-bold tracking-tight">Products</h2>
				<Button onClick={() => setShowAddDialog(true)}>
					<Plus className="mr-2 h-4 w-4" />
					Add Product
				</Button>
			</div>
			<DataTable data={products} columns={columns} />
			<ProductDialog open={showAddDialog} onOpenChange={setShowAddDialog} />
		</div>
	);
}
