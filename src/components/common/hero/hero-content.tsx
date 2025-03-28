'use client';

import {Button} from '@/components/ui/button';
import {motion} from 'framer-motion';

export function HeroContent() {
	return (
		<div className="relative min-h-screen flex items-center justify-center">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<motion.h1
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8}}
					className="text-6xl font-bold mb-6 text-white"
				>
					Discover the History of Art
				</motion.h1>
				<motion.p
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8, delay: 0.2}}
					className="text-xl mb-8 max-w-2xl mx-auto text-white/90"
				>
					Journey through centuries of artistic expression with our immersive digital experience
				</motion.p>
				<motion.div
					initial={{opacity: 0, y: 20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.8, delay: 0.4}}
				>
					<Button size="lg" className="rounded-full">
						Start Exploring
					</Button>
				</motion.div>
			</div>
		</div>
	);
}
