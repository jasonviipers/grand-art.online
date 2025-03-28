'use client';

import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface NavItemProps {
	href: string;
	icon: LucideIcon;
	label: string;
	badge?: number;
	isActive?: boolean;
}

export function NavItem({ href, icon: Icon, label, badge, isActive }: NavItemProps) {
	return (
		<Link href={href}
			className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive ? 'bg-muted text-primary' : 'text-muted-foreground'}`}>
			<Icon className="h-4 w-4" />
			{label}
			{badge && (
				<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
					{badge}
				</Badge>
			)}
		</Link>
	);
}
