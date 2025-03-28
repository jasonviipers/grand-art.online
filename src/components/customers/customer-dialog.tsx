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
import {useToast} from '@/hooks/use-toast';
import {Customer, CustomerFormData} from '@/types/customer-type';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Invalid email address'),
	phone: z.string().min(10, 'Phone number must be at least 10 characters'),
	status: z.enum(['active', 'inactive']),
	dateJoined: z.string(),
});

interface CustomerDialogProps {
	customer?: Customer;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function CustomerDialog({customer, open, onOpenChange}: CustomerDialogProps) {
	const {toast} = useToast();
	const [loading, setLoading] = useState(false);

	const form = useForm<CustomerFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: customer || {
			name: '',
			email: '',
			phone: '',
			status: 'active',
			dateJoined: new Date().toISOString().split('T')[0],
		},
	});

	const onSubmit = async (data: CustomerFormData) => {
		setLoading(true);
		try {
			// In a real app, you would make an API call here
			console.log('Submitting customer data:', data);
			toast({
				title: customer ? 'Customer updated' : 'Customer created',
				description: `Successfully ${customer ? 'updated' : 'created'} ${data.name}`,
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
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>{customer ? 'Edit Customer' : 'Add Customer'}</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
							name="email"
							render={({field}) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input type="email" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({field}) => (
								<FormItem>
									<FormLabel>Phone</FormLabel>
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
											<SelectItem value="active">Active</SelectItem>
											<SelectItem value="inactive">Inactive</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-end space-x-2 pt-4">
							<Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
								Cancel
							</Button>
							<Button type="submit" disabled={loading}>
								{customer ? 'Update' : 'Create'}
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
