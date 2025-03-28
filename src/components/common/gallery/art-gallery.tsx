'use client';

import {motion} from 'framer-motion';
import {useState} from 'react';
import {ArtworkModal} from './artwork-modal';
import {GalleryGrid} from './gallery-grid';

export const artworks = [
	{
		id: 1,
		title: 'Portrait of a Lady',
		artist: 'Leonardo da Vinci',
		year: '1495-1496',
		image:
			'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800',
		description: 'A masterpiece of Renaissance portraiture.',
	},
	{
		id: 2,
		title: 'The Creation',
		artist: 'Michelangelo',
		year: '1508-1512',
		image:
			'https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80&w=800',
		description: 'Part of the Sistine Chapel ceiling.',
	},
	{
		id: 3,
		title: 'The Night Watch',
		artist: 'Rembrandt',
		year: '1642',
		image:
			'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?auto=format&fit=crop&q=80&w=800&h=600',
		description: 'A masterpiece of Dutch Golden Age painting.',
	},
	{
		id: 4,
		title: 'The Starry Night',
		artist: 'Vincent van Gogh',
		year: '1889',
		image:
			'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?auto=format&fit=crop&q=80&w=800&h=600',
		description: "One of Van Gogh's most famous works.",
	},
	{
		id: 5,
		title: 'The Persistence of Memory',
		artist: 'Salvador Dalí',
		year: '1931',
		image:
			'https://images.unsplash.com/photo-1569335529517-278a45cfcb53?auto=format&fit=crop&q=80&w=800',
		description: 'A surrealist masterpiece.',
	},
	{
		id: 6,
		title: 'Girl with a Pearl Earring',
		artist: 'Johannes Vermeer',
		year: '1665',
		image:
			'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?auto=format&fit=crop&q=80&w=800&h=600',
		description: "One of Vermeer's most famous works.",
	},
];

export function ArtGallery() {
	const [selectedArtwork, setSelectedArtwork] = useState<(typeof artworks)[0] | null>(null);

	return (
		<section className="py-24 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					transition={{duration: 0.8}}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold mb-4">Art Gallery</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Explore our curated collection of masterpieces from different periods and styles
					</p>
				</motion.div>

				<GalleryGrid artworks={artworks} onSelect={setSelectedArtwork} />

				{selectedArtwork && (
					<ArtworkModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />
				)}
			</div>
		</section>
	);
}
