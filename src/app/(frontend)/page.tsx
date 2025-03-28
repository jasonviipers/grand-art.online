import {FeaturedCollections} from '@/components/common/collections/featured-collections';
import {ArtGallery} from '@/components/common/gallery/art-gallery';
import {HeroSection} from '@/components/common/hero/hero-section';
import {Metadata} from 'next';

export const metadata: Metadata = {};

export default function Home() {
	return (
		<div className="relative">
			<HeroSection />
			<FeaturedCollections />
			<ArtGallery />
		</div>
	);
}
