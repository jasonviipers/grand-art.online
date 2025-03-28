'use client';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { useCartStore } from '@/lib/store/use-cart-store';
import { Product } from '@/types/product-type';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface ProductQuickViewProps {
	product: Product;
	open: boolean;
	onClose: () => void;
}

export function ProductQuickView({ product, open, onClose }: ProductQuickViewProps) {
	const addItem = useCartStore((state) => state.addItem);
	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent className="max-w-4xl">
				<div className="grid md:grid-cols-2 gap-6">
					<div className="relative aspect-square overflow-hidden rounded-lg">
						<motion.img
							initial={{ scale: 1.5, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.4 }}
							src={product.image}
							alt={product.name}
							className="w-full h-full object-cover"
						/>
					</div>
					<div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.2 }}
						>
							<DialogHeader>
								<DialogTitle className="text-2xl font-bold mb-3">{product.name}</DialogTitle>
								<DialogDescription className="text-muted-foreground mb-4">{product.category}</DialogDescription>
							</DialogHeader>
							<p className="text-xl font-bold mb-4">${product.price}</p>
							<p className="text-sm leading-relaxed mb-6">{product.description}</p>
							<Button className="w-full" onClick={() => addItem(product)}>
								<ShoppingCart className="w-4 h-4 mr-2" />
								Add to Cart
							</Button>
						</motion.div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
