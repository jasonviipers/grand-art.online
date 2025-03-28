'use client';

import {cn} from '@/lib/utils';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

interface NavLinkProps {
	href: string;
	icon: React.ReactNode;
	text: string;
}

export function NavLink({href, icon, text}: NavLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} className="relative">
			<motion.div
				className={cn(
					'flex items-center space-x-1 text-sm font-medium transition-colors',
					isActive ? 'text-primary' : 'text-foreground/60 hover:text-foreground',
				)}
				whileHover={{scale: 1.05}}
				whileTap={{scale: 0.95}}
			>
				{icon}
				<span>{text}</span>
			</motion.div>
			{isActive && (
				<motion.div
					className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
					layoutId="activeLink"
					transition={{type: 'spring', stiffness: 380, damping: 30}}
				/>
			)}
		</Link>
	);
}
