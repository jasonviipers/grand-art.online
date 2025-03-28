'use client';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import {AnimatePresence, motion} from 'framer-motion';

interface Artwork {
	id: number;
	title: string;
	artist: string;
	year: string;
	image: string;
	description: string;
}

interface ArtworkModalProps {
	artwork: Artwork;
	onClose: () => void;
}

export function ArtworkModal({artwork, onClose}: ArtworkModalProps) {
	return (
		<Dialog open={true} onOpenChange={onClose}>
			<DialogContent className="max-w-4xl">
				<div className="grid md:grid-cols-2 gap-6">
					<div className="relative aspect-[4/3] overflow-hidden rounded-lg">
						<AnimatePresence mode="wait">
							<motion.img
								initial={{scale: 1.5, opacity: 0}}
								animate={{scale: 1, opacity: 1}}
								transition={{duration: 0.4}}
								src={artwork.image}
								alt={artwork.title}
								className="w-full h-full object-cover"
							/>
						</AnimatePresence>
					</div>
					<div>
						<motion.div
							initial={{opacity: 0, y: 20}}
							animate={{opacity: 1, y: 0}}
							transition={{duration: 0.4, delay: 0.2}}
						>
							<DialogHeader>
								<DialogTitle className="text-2xl font-bold mb-3">{artwork.title}</DialogTitle>
								<DialogDescription className="text-muted-foreground mb-4">
									{artwork.artist}, {artwork.year}
								</DialogDescription>
							</DialogHeader>
							<p className="text-sm leading-relaxed">{artwork.description}</p>
						</motion.div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
