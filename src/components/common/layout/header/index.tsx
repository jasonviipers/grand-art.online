'use client';
import { NotificationsDropdown } from '@/components/common/notification/notifications-dropdown';
import { MobileNav } from './mobile-nav';
import { Search } from './search';
import { UserNav } from './user-nav';
import { Session } from '@/types/auth-types';

interface HeaderProps {
	data: Session | null;
}
export function Header({data}: HeaderProps) {
	return (
		<header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
			<MobileNav  />
			<Search />
			<NotificationsDropdown />
			<UserNav data={data} />
		</header>
	);
}
