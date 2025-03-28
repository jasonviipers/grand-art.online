'use client';

import {AppearanceSettings} from '@/components/common/settings/appearance-settings';
import {ProfileSettings} from '@/components/common/settings/profile-settings';
import {SecuritySettings} from '@/components/common/settings/security-settings';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

export default function SettingsPage() {
	return (
		<div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
			<div className="flex items-center justify-between space-y-2">
				<h2 className="text-3xl font-bold tracking-tight">Settings</h2>
			</div>
			<Tabs defaultValue="profile" className="space-y-4">
				<TabsList>
					<TabsTrigger value="profile">Profile</TabsTrigger>
					<TabsTrigger value="notifications">Notifications</TabsTrigger>
					<TabsTrigger value="security">Security</TabsTrigger>
					<TabsTrigger value="appearance">Appearance</TabsTrigger>
					<TabsTrigger value="api">API</TabsTrigger>
				</TabsList>
				<TabsContent value="profile" className="space-y-4">
					<ProfileSettings />
				</TabsContent>
				<TabsContent value="notifications" className="space-y-4">
					{/* <NotificationSettings /> */}
				</TabsContent>
				<TabsContent value="security" className="space-y-4">
					<SecuritySettings />
				</TabsContent>
				<TabsContent value="appearance" className="space-y-4">
					<AppearanceSettings />
				</TabsContent>
				<TabsContent value="api" className="space-y-4">
					{/* <ApiSettings /> */}
				</TabsContent>
			</Tabs>
		</div>
	);
}
