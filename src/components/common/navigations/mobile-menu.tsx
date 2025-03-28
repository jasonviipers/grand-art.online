'use client';

import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {Menu} from 'lucide-react';
import {useState} from 'react';
import {MobileNavLinks} from './mobile-nav-links';

export function MobileMenu() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Menu className="h-6 w-6" />
					<span className="sr-only">Toggle menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="right" className="w-[300px] sm:w-[400px]">
				<MobileNavLinks onSelect={() => setOpen(false)} />
			</SheetContent>
		</Sheet>
	);
}
