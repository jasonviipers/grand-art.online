'use client';

import { CartButton } from '@/components/boutique/cart/cart-button';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BrandLogo } from '../logo';
import { MobileMenu } from './mobile-menu';
import { NavMenu } from './nav-menu';
import { Session } from '@/types/auth-types';
import { useScroll } from '@/hooks/use-scroll';

interface NavigationProps {
	data: Session | null;
}
export function Navigation({ data }: NavigationProps) {
	const scrolled = useScroll();

	return (
		<motion.nav
			className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
				}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<BrandLogo />

					<div className="hidden md:flex items-center space-x-8">
						<NavMenu />
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<CartButton />
						{/* we don't show the sign in button if the user is logged in */}
						{!data?.user ? (
							<Link
								href="/sign-in"
								className={cn(
									buttonVariants({ variant: 'ghost' }),
									scrolled ? 'text-primary' : 'text-foreground',
								)}
							>
								Sign in
							</Link>
						) : (
							<Link
								href="/client"
								className={cn(
									buttonVariants({ variant: 'ghost' }),
									scrolled ? 'text-primary' : 'text-foreground',
								)}
							>
								dashboard
							</Link>
						)}
					</div>
					<div className="md:hidden">
						<MobileMenu />
					</div>
				</div>
			</div>
		</motion.nav>
	);
}
