// "use client"
// import { useAuthClient } from "@/lib/auth-client";
// import { useAuthStore } from "@/lib/store/use-auth-store";
// import { useEffect } from "react";


// export const InitializeSession = () => {

//     const setUser = useAuthStore((state) => state.setSession);

// 	useEffect(() => {
// 		const fetchSession = async () => {
// 			const session = await useAuthClient.getSession();
// 			setUser(session.data?.user || null);
// 		};

// 		fetchSession();
// 	}, [setUser]);

// 	return null; // No UI to render
// };