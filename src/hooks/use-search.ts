'use client';

import {useCallback, useState} from 'react';
import {useDebounce} from './use-debounce';

export function useSearchProducts() {
	const [searchQuery, setSearchQuery] = useState('');

	const debouncedSearch = useDebounce((query: string) => {
		// Implement search logic here
		console.log('Searching for:', query);
	}, 300);

	const handleSearch = useCallback(
		(query: string) => {
			setSearchQuery(query);
			debouncedSearch(query);
		},
		[debouncedSearch],
	);

	return {searchQuery, handleSearch};
}
