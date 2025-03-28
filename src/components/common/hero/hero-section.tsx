'use client';

import dynamic from 'next/dynamic';
import {HeroContent} from './hero-content';

const BackgroundVideo = dynamic(() => import('./background-video'), {ssr: false});
export function HeroSection() {
	return (
		<div className="relative min-h-screen">
			<BackgroundVideo />
			<HeroContent />
		</div>
	);
}
