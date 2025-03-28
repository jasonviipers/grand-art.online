'use client';

import { motion } from 'framer-motion';
import { Film,Image, Mail, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const links = [
	{ href: '/spectacles', icon: Film, text: 'Spectacles' },
	{ href: '/boutique', icon: ShoppingBag, text: 'Boutique' },
	{ href: '/expo', icon: Image, text: 'Expo' },
	{ href: '/contact', icon: Mail, text: 'Contact' },
];

interface MobileNavLinksProps {
	onSelect: () => void;
}

export function MobileNavLinks({ onSelect }: MobileNavLinksProps) {

	return (
		<nav className="flex flex-col space-y-4 mt-8">
			{links.map((link, index) => {
				const Icon = link.icon;
				return (
					<motion.div
						key={link.href}
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: index * 0.1 }}
					>
						<Link
							href={link.href}
							onClick={onSelect}
							className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent text-foreground/60 hover:text-foreground transition-colors"
						>
							<Icon className="h-5 w-5" />
							<span>{link.text}</span>
						</Link>
					</motion.div>
				);
			})}
		</nav>
	);
}
