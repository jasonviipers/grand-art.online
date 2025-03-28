'use client';

import {motion} from 'framer-motion';
import {CollectionCard} from './collection-card';

const collections = [
	{
		id: 1,
		title: 'Renaissance Masterpieces',
		description: 'Explore the golden age of art with works from Da Vinci, Michelangelo, and more.',
		image:
			'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800&h=600',
	},
	{
		id: 2,
		title: 'Impressionist Collection',
		description: 'Discover the revolutionary movement that changed the course of art history.',
		image:
			'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?auto=format&fit=crop&q=80&w=800&h=600',
	},
	{
		id: 3,
		title: 'Modern Art Expressions',
		description: 'Experience the bold visions of contemporary artists pushing boundaries.',
		image:
			'https://images.unsplash.com/photo-1577083552765-cb4bc62c8ac0?auto=format&fit=crop&q=80&w=800&h=600',
	},
	{
		id: 4,
		title: 'Abstract Expressionism',
		description: 'Immerse yourself in the abstract world of art.',
		image:
			'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?auto=format&fit=crop&q=80&w=800&h=600',
	},
];

export function FeaturedCollections() {
	return (
		<section className="relative py-24 bg-background/80 backdrop-blur-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.h2
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					transition={{duration: 0.8}}
					className="text-4xl font-bold mb-12 text-center"
				>
					Featured Collections
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{collections.map((collection, index) => (
						<CollectionCard key={collection.id} collection={collection} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
