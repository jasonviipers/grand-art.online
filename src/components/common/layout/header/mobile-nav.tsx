'use client';

import {Button} from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import {Menu} from 'lucide-react';
import {NavLinks} from '../sidebar/nav-links';

export function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" className="shrink-0 md:hidden">
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="flex flex-col">
				<SheetHeader>
					<SheetTitle></SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				<div className="flex-1">
					{/* <NavLinks  /> */}
				</div>
				<div className="mt-auto"></div>
			</SheetContent>
		</Sheet>
	);
}
