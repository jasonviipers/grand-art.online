'use client';

import { ProductCategories } from '@/components/boutique/product-categories';
import { ProductGrid } from '@/components/boutique/product-grid';
import { useProductFilter } from '@/hooks/use-product-filter';
import { products } from '@/lib/data/products';
import { motion } from 'framer-motion';

export default function BoutiquePage() {
	const { activeCategory, setActiveCategory, filteredProducts } = useProductFilter(products);

	return (
		<div className="min-h-screen pt-20 px-4">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h1 className="text-4xl font-bold mb-4">Boutique</h1>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Discover our collection of art books, prints, and merchandise.
					</p>
				</motion.div>
				<ProductCategories
					activeCategory={activeCategory}
					onCategoryChange={setActiveCategory}
				/>
				<ProductGrid products={filteredProducts} />
			</div>
		</div>
	);
}
