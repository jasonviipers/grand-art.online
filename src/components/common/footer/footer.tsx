'use client';

import {motion} from 'framer-motion';
import {Facebook, Instagram, Palette, Twitter, Youtube} from 'lucide-react';
import Link from 'next/link';

export function Footer() {
	const socialLinks = [
		{icon: Facebook, href: '#'},
		{icon: Twitter, href: '#'},
		{icon: Instagram, href: '#'},
		{icon: Youtube, href: '#'},
	];

	return (
		<footer className="bg-background border-t">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
					{/* Brand Section */}
					<div className="lg:col-span-2">
						<Link href="/" className="flex items-center space-x-2 mb-4">
							<Palette className="w-8 h-8" />
							<span className="font-bold text-xl">GRAND ART</span>
						</Link>
						<p className="text-muted-foreground max-w-sm">
							Discover the beauty of art through our curated collections and immersive experiences.
						</p>
						<div className="flex space-x-4 mt-6">
							{socialLinks.map((social, index) => {
								const Icon = social.icon;
								return (
									<motion.a
										key={index}
										href={social.href}
										whileHover={{scale: 1.1}}
										className="text-muted-foreground hover:text-foreground transition-colors"
									>
										<Icon className="w-5 h-5" />
									</motion.a>
								);
							})}
						</div>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
					<p>&copy; {new Date().getFullYear()} Grand Art. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
