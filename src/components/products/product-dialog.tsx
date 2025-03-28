'use client';

import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {Textarea} from '@/components/ui/textarea';
import {useToast} from '@/hooks/use-toast';
import {ProductFormData, productSchema} from '@/lib/validators/product';
import {Product} from '@/types/product-type';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Switch} from '../ui/switch';

interface ProductDialogProps {
	product?: Product;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function ProductDialog({product, open, onOpenChange}: ProductDialogProps) {
	const {toast} = useToast();
	const [loading, setLoading] = useState(false);

	const form = useForm<ProductFormData>({
		resolver: zodResolver(productSchema),
		defaultValues: product
			? {
					...product,
					price: Number(product.price),
					inventory: Number(product.inventory),
					originalPrice: product.originalPrice ? Number(product.originalPrice) : undefined,
					isPromotion: product.isPromotion || false,
				}
			: {
					name: '',
					description: '',
					price: 0,
					originalPrice: 0,
					isPromotion: false,
					category: '',
					status: 'in_stock',
					sku: '',
					inventory: 0,
				},
	});

	const onSubmit = async (data: ProductFormData) => {
		setLoading(true);
		try {
			// In a real app, you would make an API call here
			console.log('Submitting product data:', {
				...data,
				price: Number(data.price),
				inventory: Number(data.inventory),
				originalPrice: data.originalPrice ? Number(data.originalPrice) : undefined,
				isPromotion: data.isPromotion || false,
			});
			toast({
				title: product ? 'Product updated' : 'Product created',
				description: `Successfully ${product ? 'updated' : 'created'} ${data.name}`,
			});
			onOpenChange(false);
		} catch (_error) {
			toast({
				title: 'Error',
				description: 'Something went wrong. Please try again.',
				variant: 'destructive',
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[600px]">
				<DialogHeader>
					<DialogTitle>{product ? 'Edit Product' : 'Add Product'}</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="name"
								render={({field}) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="category"
								render={({field}) => (
									<FormItem>
										<FormLabel>Category</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="description"
							render={({field}) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="price"
								render={({field}) => (
									<FormItem>
										<FormLabel>Price</FormLabel>
										<FormControl>
											<Input {...field} type="number" step="0.01" min="0" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="originalPrice"
								render={({field}) => (
									<FormItem>
										<FormLabel>Original Price</FormLabel>
										<FormControl>
											<Input {...field} type="number" step="0.01" min="0" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="inventory"
							render={({field}) => (
								<FormItem>
									<FormLabel>Inventory</FormLabel>
									<FormControl>
										<Input {...field} type="number" min="0" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="grid grid-cols-2 gap-4">
							<FormField
								control={form.control}
								name="sku"
								render={({field}) => (
									<FormItem>
										<FormLabel>SKU</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="status"
								render={({field}) => (
									<FormItem>
										<FormLabel>Status</FormLabel>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select status" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="in_stock">In Stock</SelectItem>
												<SelectItem value="low_stock">Low Stock</SelectItem>
												<SelectItem value="out_of_stock">Out of Stock</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="isPromotion"
							render={({field}) => (
								<FormItem className="flex items-center justify-between rounded-lg border p-4">
									<div className="space-y-0.5">
										<FormLabel className="text-base">Promotion</FormLabel>
										<div className="text-sm text-muted-foreground">
											Mark this product as being on promotion
										</div>
									</div>
									<FormControl>
										<Switch checked={field.value} onCheckedChange={field.onChange} />
									</FormControl>
								</FormItem>
							)}
						/>
						<div className="flex justify-end space-x-2 pt-4">
							<Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
								Cancel
							</Button>
							<Button type="submit" disabled={loading}>
								{product ? 'Update' : 'Create'}
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
