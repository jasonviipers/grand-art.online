export type MenuLocation = 'header' | 'footer' | 'sidebar';

export interface MenuItem {
	id: string;
	name: string;
	url: string;
	parentId?: string;
	order: number;
	isVisible: boolean;
	location: MenuLocation;
	children?: MenuItem[];
}

export interface MenuSection {
	id: string;
	location: MenuLocation;
	items: MenuItem[];
}

export type MenuFormData = Omit<MenuItem, 'id' | 'children'>;
