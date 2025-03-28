import Link from 'next/link';

export function BrandLogo() {
	return (
		<Link href="/" className="flex items-center space-x-2">
			<span className="font-bold text-xl">GRAND ART</span>
		</Link>
	);
}
