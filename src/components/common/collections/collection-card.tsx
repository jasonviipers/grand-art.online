'use client';

import {motion} from 'framer-motion';

interface Collection {
	id: number;
	title: string;
	description: string;
	image: string;
}

interface CollectionCardProps {
	collection: Collection;
	index: number;
}

export function CollectionCard({collection, index}: CollectionCardProps) {
	return (
		<motion.div
			initial={{opacity: 0, y: 20}}
			whileInView={{opacity: 1, y: 0}}
			transition={{duration: 0.8, delay: index * 0.2}}
			className="bg-card rounded-lg overflow-hidden shadow-lg dark:bg-white/10"
		>
			<div className="aspect-w-16 aspect-h-9">
				<img src={collection.image} alt={collection.title} className="w-full h-48 object-cover" />
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
				<p className="text-muted-foreground">{collection.description}</p>
			</div>
		</motion.div>
	);
}
