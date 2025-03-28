'use client';

import {Home, Settings, ShoppingBag, ShoppingCart, Users} from 'lucide-react';
import {NavItem} from './nav-item';
import { SelectUser } from '@/db/schema';

interface NavItemProps {
	data : SelectUser | null
}
export function NavLinks({data}: NavItemProps) {

	return (
		<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
			{/* Only show admin links if the user is admin */}
			{data?.role === 'admin' && (
				<>
					<NavItem href="/admin" icon={Home} label="Dashboard" isActive />
					<NavItem href="/admin/customers" icon={Users} label="Customers" />
					<NavItem href="/admin/products" icon={ShoppingBag} label="Products" />
					<NavItem href="/admin/orders" icon={ShoppingCart} label="Orders" />
				</>
			)}
			{data?.role === 'user' && (
				<>
					<NavItem href="/client" icon={Home} label="Dashboard" isActive />
					<NavItem href="/client/orders" icon={ShoppingCart} label="Orders" />
					<NavItem href="/client/settings" icon={Settings} label="Settings" />
				</>
			)}
		</nav>
	);
}
