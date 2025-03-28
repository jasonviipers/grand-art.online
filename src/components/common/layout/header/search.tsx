'use client';

import {Input} from '@/components/ui/input';
import {useSearchProducts} from '@/hooks/use-search';
import {Search as SearchIcon} from 'lucide-react';

export function Search() {
	const {handleSearch} = useSearchProducts();

	return (
		<div className="relative w-full flex-1">
			<SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
			<Input
				type="search"
				placeholder="Search products..."
				className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
				onChange={(e) => handleSearch(e.target.value)}
			/>
		</div>
	);
}
