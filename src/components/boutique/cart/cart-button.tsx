'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCartStore } from '@/lib/store/use-cart-store';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { DiscountBanner } from './discount-banner';
import { useRouter } from 'next/navigation';

export function CartButton() {
	const { items, total, discount, removeItem, updateQuantity } = useCartStore();
	const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
	const router = useRouter();
	const calculateDiscountedTotal = () => {
		if (!discount || (discount.minAmount && total < discount.minAmount)) {
			return total;
		}
		return discount.type === 'percentage'
			? total * (1 - discount.value / 100)
			: total - discount.value;
	};

	const finalTotal = calculateDiscountedTotal();

	return (
		<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon" className="relative">
						<ShoppingCart className="h-4 w-4" />
						{itemCount > 0 && (
							<span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
								{itemCount}
							</span>
						)}
					</Button>
				</SheetTrigger>
				<SheetContent className="w-full sm:max-w-lg">
					<SheetHeader>
						<SheetTitle>Shopping Cart</SheetTitle>
					</SheetHeader>
					<div className="mt-8 space-y-4">
						{discount && <DiscountBanner discount={discount} subtotal={total} />}
						{items.map((item) => (
							<div key={item.id} className="flex items-center space-x-4">
								<div className="relative h-16 w-16">
									<Image
										src={item.image || ''}
										alt={item.name}
										fill
										className="object-cover rounded"
									/>
								</div>
								<div className="flex-1">
									<h3 className="font-medium">{item.name}</h3>
									<p className="text-sm text-muted-foreground">${item.price}</p>
								</div>
								<div className="flex items-center space-x-2">
									<Button
										variant="outline"
										size="icon"
										onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
									>
										<Minus className="h-4 w-4" />
									</Button>
									<span>{item.quantity}</span>
									<Button
										variant="outline"
										size="icon"
										onClick={() => updateQuantity(item.id, item.quantity + 1)}
									>
										<Plus className="h-4 w-4" />
									</Button>
									<Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
										<Trash2 className="h-4 w-4" />
									</Button>
								</div>
							</div>
						))}
						{items.length === 0 && (
							<p className="text-center text-muted-foreground">Your cart is empty</p>
						)}
						{items.length > 0 && (
							<div className="border-t pt-4 space-y-4">
								<div className="space-y-2">
									<div className="flex justify-between text-sm">
										<span className="text-muted-foreground">Subtotal</span>
										<span>${total.toFixed(2)}</span>
									</div>
									{discount && total >= (discount.minAmount || 0) && (
										<div className="flex justify-between text-sm text-green-600">
											<span>Discount ({discount.code})</span>
											<span>
												-
												{discount.type === 'percentage'
													? `${discount.value}%`
													: `$${discount.value.toFixed(2)}`}
											</span>
										</div>
									)}
									<div className="flex justify-between font-medium">
										<span>Total</span>
										<span>${finalTotal.toFixed(2)}</span>
									</div>
								</div>
								<Button className="w-full" onClick={() => router.push('/checkout')}>Checkout</Button>
							</div>
						)}
					</div>
				</SheetContent>
			</Sheet>
		</motion.div>
	);
}
