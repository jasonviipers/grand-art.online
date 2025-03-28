'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ProductCard } from './product-card';
import { Product } from '@/types/product-type';

interface ProductGridProps {
	products: Product[]
}
export function ProductGrid({ products }: ProductGridProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<AnimatePresence mode="popLayout">
				{products.map((product, index) => (
					<motion.div
						key={product.id}
						layout
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<ProductCard product={product} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}
