'use client';

import {Toaster} from '@/components/ui/toaster';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {ThemeProvider} from './theme-provider';
// import { InitializeSession } from '@/hooks/initialize-session';

export const QueryProvider = ({children}: {children: React.ReactNode}) => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
				{/* <InitializeSession /> */}
				{children}
				<Toaster />
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
