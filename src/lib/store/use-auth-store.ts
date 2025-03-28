// import { Session } from '@/types/auth-types';
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface AuthState {
//     session: Session | null;
//     setSession: (session: Session | null) => void;
//     clearSession: () => void;
// }

// export const useAuthStore = create<AuthState>()(
//     persist(
//         (set) => ({
//             session: null,
//             setSession: (session: Session | null) => set({ session }),
//             clearSession: () => set({ session: null }),
//         }),
//         {
//             name: 'auth-storage',
//         }
//     )
// );