'use client';

import {Film, Image, Mail, ShoppingBag} from 'lucide-react';
import {NavLink} from './nav-link';

export function NavMenu() {
	return (
		<div className="hidden md:flex items-center space-x-8">
			<NavLink href="/spectacles" icon={<Film className="w-4 h-4" />} text="Spectacles" />
			<NavLink href="/boutique" icon={<ShoppingBag className="w-4 h-4" />} text="Boutique" />
			<NavLink href="/expo" icon={<Image className="w-4 h-4" />} text="Expo" />
			<NavLink href="/contact" icon={<Mail className="w-4 h-4" />} text="Contact" />
		</div>
	);
}
