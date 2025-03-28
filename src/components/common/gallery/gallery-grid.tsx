'use client';

import {motion} from 'framer-motion';

interface Artwork {
	id: number;
	title: string;
	artist: string;
	year: string;
	image: string;
	description: string;
}

interface GalleryGridProps {
	artworks: Artwork[];
	onSelect: (artwork: Artwork) => void;
}

export function GalleryGrid({artworks, onSelect}: GalleryGridProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{artworks.map((artwork, index) => (
				<motion.div
					key={artwork.id}
					initial={{opacity: 0, scale: 0.9}}
					whileInView={{opacity: 1, scale: 1}}
					transition={{duration: 0.5, delay: index * 0.1}}
					whileHover={{scale: 1.05}}
					className="cursor-pointer group"
					onClick={() => onSelect(artwork)}
				>
					<div className="relative overflow-hidden rounded-lg aspect-[4/3]">
						<motion.img
							src={artwork.image}
							alt={artwork.title}
							className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
							<div className="text-white">
								<h3 className="text-xl font-semibold mb-1">{artwork.title}</h3>
								<p className="text-sm opacity-90">
									{artwork.artist}, {artwork.year}
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
}
