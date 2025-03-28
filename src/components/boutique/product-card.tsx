'use client';

import {Button} from '@/components/ui/button';
import {useCartStore} from '@/lib/store/use-cart-store';
import {cn} from '@/lib/utils';
import {Product} from '@/types/product-type';
import {motion} from 'framer-motion';
import {Percent, ShoppingCart} from 'lucide-react';
import {useState} from 'react';
import {Badge} from '../ui/badge';
import {ProductQuickView} from './product-quick-view';

interface ProductCardProps {
	product: Product;
}

export function ProductCard({product}: ProductCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [showQuickView, setShowQuickView] = useState(false);
	const addItem = useCartStore((state) => state.addItem);

	const discountPercentage = product.originalPrice
		? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
		: 0;

	return (
		<>
			<motion.div
				className="group relative bg-card rounded-lg overflow-hidden"
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
				whileHover={{y: -5}}
			>
				{(product.isPromotion || product.originalPrice) && (
					<div className="absolute top-4 left-4 z-10">
						<Badge
							variant="destructive"
							className="flex items-center gap-1 px-2 py-1 animate-[fade-in-up_0.3s_ease-out]"
						>
							<Percent className="h-3 w-3" />
							{discountPercentage}% OFF
						</Badge>
					</div>
				)}
				<div className="aspect-square overflow-hidden">
					<motion.img
						src={product.image}
						alt={product.name}
						className="w-full h-full object-cover"
						animate={{scale: isHovered ? 1.1 : 1}}
						transition={{duration: 0.4}}
					/>
				</div>

				<motion.div
					className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
					initial={false}
					animate={{opacity: isHovered ? 1 : 0}}
				>
					<div className="p-4 text-center text-white">
						<Button
							variant="outline"
							className="mb-2 w-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
							onClick={() => setShowQuickView(true)}
						>
							Quick View
						</Button>
						<Button className="w-full" onClick={() => addItem(product)}>
							<ShoppingCart className="w-4 h-4 mr-2" />
							Add to Cart
						</Button>
					</div>
				</motion.div>

				<div className="p-4 flex flex-col">
					<h3 className="font-semibold mb-1">{product.name}</h3>
					<p className="text-muted-foreground text-sm mb-2">{product.category}</p>
					<div className="flex items-center gap-2">
						{product.isPromotion && (
							<span className="text-sm line-through text-muted-foreground">
								<p className="font-bold">${product.originalPrice?.toFixed(2)}</p>
							</span>
						)}
						<span className={cn('text-lg', product.isPromotion && 'text-destructive font-bold')}>
							<p className="font-bold">${product.price.toFixed(2)}</p>
						</span>
					</div>
				</div>
			</motion.div>

			<ProductQuickView
				product={product}
				open={showQuickView}
				onClose={() => setShowQuickView(false)}
			/>
		</>
	);
}
