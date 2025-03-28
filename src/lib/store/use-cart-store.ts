import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Discount, Product } from '@/types/product-type';

export interface CartItem extends Product {
	quantity: number;
}
export interface CartState {
	items: CartItem[];
	total: number;
	discount?: Discount;
}

interface CartStore extends CartState {
	addItem: (product: Product) => void;
	removeItem: (productId: string) => void;
	updateQuantity: (productId: string, quantity: number) => void;
	clearCart: () => void;
	setDiscount: (discount: Discount | undefined) => void;
}

export const useCartStore = create<CartStore>()(
	persist(
		(set) => ({
			items: [],
			total: 0,
			discount: {
				code: 'SUMMER2024',
				description: 'Summer Sale! Get 20% off on orders above $50',
				type: 'percentage',
				value: 20,
				minAmount: 50,
				expiryDate: new Date('2024-08-31'),
			},
			addItem: (product) =>
				set((state) => {
					const existingItem = state.items.find((item) => item.id === product.id);
					let updatedItems;
					if (existingItem) {
						updatedItems = state.items.map((item) =>
							item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
						);
					} else {
						updatedItems = [...state.items, { ...product, quantity: 1 }];
					}
					const newTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
					return { ...state, items: updatedItems, total: newTotal };
				}),
			removeItem: (productId) =>
				set((state) => {
					const updatedItems = state.items.filter((item) => item.id !== productId);
					const newTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
					return { ...state, items: updatedItems, total: newTotal };
				}),
			updateQuantity: (productId, quantity) =>
				set((state) => {
					const updatedItems = state.items.map((item) =>
						item.id === productId ? { ...item, quantity } : item
					);
					const newTotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
					return { ...state, items: updatedItems, total: newTotal };
				}),
			clearCart: () => set({ items: [], total: 0 }),
			setDiscount: (discount) => set((state) => ({ ...state, discount })),
		}),
		{
			name: 'cart-storage', // Unique name for storage key
			storage: createJSONStorage(() => localStorage), // Storage mechanism
		}
	)
);
