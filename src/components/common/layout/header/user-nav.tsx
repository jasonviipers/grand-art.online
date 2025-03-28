'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthClient } from '@/lib/auth-client';
import { Session } from '@/types/auth-types';
import { Loader2, LogOut } from 'lucide-react';
import { useState } from 'react';

interface UserNavProps {
	data: Session | null;
}

export function UserNav({ data }: UserNavProps) {
	const [isSignOut, setIsSignOut] = useState<boolean>(false);

	if (!data?.user) {
		return null;
	}

	const handleSignOut = async () => {
		setIsSignOut(true);
		await useAuthClient.signOut({
			fetchOptions: {
				onSuccess: async () => {
					window.location.href = '/';
				},
			},
		});
		setIsSignOut(false);
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className="flex items-center gap-2">
					<Avatar className="h-8 w-8 rounded-lg">
						<AvatarImage src={data.user.image || ''} alt={data.user.name} />
						<AvatarFallback className="rounded-lg">
							{data.user.name
								.split(' ')
								.map((name) => name[0])
								.join('')}
						</AvatarFallback>
					</Avatar>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
				align="end"
				sideOffset={4}
			>
				<DropdownMenuLabel className="p-0 font-normal">
					<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<Avatar className="h-8 w-8 rounded-lg">
							<AvatarImage src={data.user.image || ''} alt={data.user.name} />
							<AvatarFallback className="rounded-lg">
								{data.user.name
									.split(' ')
									.map((name) => name[0])
									.join('')}
							</AvatarFallback>
						</Avatar>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-semibold">{data.user.name}</span>
							<span className="truncate text-xs">{data.user.email}</span>
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleSignOut} disabled={isSignOut}>
					<span className="text-sm">
						{isSignOut ? (
							<Loader2 size={15} className="animate-spin" />
						) : (
							<div className="flex items-center gap-2">
								<LogOut size={16} />
								Sign Out
							</div>
						)}
					</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
