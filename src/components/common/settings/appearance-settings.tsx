'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group';
import {useToast} from '@/hooks/use-toast';
import {useTheme} from 'next-themes';

export function AppearanceSettings() {
	const {theme, setTheme} = useTheme();
	const {toast} = useToast();

	const handleSave = () => {
		toast({
			title: 'Appearance updated',
			description: 'Your appearance settings have been saved successfully.',
		});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Appearance</CardTitle>
				<CardDescription>Customize the appearance of the dashboard.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-4">
					<Label>Theme</Label>
					<RadioGroup
						defaultValue={theme}
						onValueChange={setTheme}
						className="grid grid-cols-3 gap-4"
					>
						<div>
							<RadioGroupItem value="light" id="light" className="peer sr-only" />
							<Label
								htmlFor="light"
								className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
							>
								Light
							</Label>
						</div>
						<div>
							<RadioGroupItem value="dark" id="dark" className="peer sr-only" />
							<Label
								htmlFor="dark"
								className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
							>
								Dark
							</Label>
						</div>
						<div>
							<RadioGroupItem value="system" id="system" className="peer sr-only" />
							<Label
								htmlFor="system"
								className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-card p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
							>
								System
							</Label>
						</div>
					</RadioGroup>
				</div>
				<Button onClick={handleSave}>Save preferences</Button>
			</CardContent>
		</Card>
	);
}
