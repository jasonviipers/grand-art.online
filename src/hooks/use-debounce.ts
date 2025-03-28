import { useCallback, useEffect, useRef } from 'react';

// define the proprety type of the argument
interface argsProps {
	[key: string]: <T>(value: T) => void;
}
export function useDebounce<T extends (...args: string[]) => void>(callback: T, delay: number) {
	const timeoutRef = useRef<number | null>(null);

	// Cleanup timeout when the component unmounts or when delay changes
	useEffect(() => {
		return () => {
			if (timeoutRef.current !== null) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return useCallback(
		(...args: Parameters<T>) => {
			if (timeoutRef.current !== null) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = window.setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay],
	);
}
