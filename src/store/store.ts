import { create } from "zustand";

interface StoreState {
  isAuthSidebarOpen: boolean;
  authMode: "signIn" | "signUp";
  openAuthSidebar: (type: "signIn" | "signUp") => void;
  closeAuthSidebar: () => void;
}

const useCartStore = create<StoreState>()((set) => ({
  // auth sidebar state
  isAuthSidebarOpen: false,
  authMode: "signIn",
  openAuthSidebar: (mode = "signIn") =>
    set({ isAuthSidebarOpen: true, authMode: mode }),
  closeAuthSidebar: () => set({ isAuthSidebarOpen: false }),
}));

export default useCartStore;
