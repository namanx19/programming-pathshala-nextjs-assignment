"use client";
import {
  createThemeStore,
  initThemeStore,
  ThemeStore,
} from "@/stores/ThemeStore";
import { useState, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

export type CounterStoreApi = ReturnType<typeof createThemeStore>;
export const ThemeProviderContext = createContext<CounterStoreApi | undefined>(
  undefined
);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<CounterStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createThemeStore(initThemeStore());
  }
  return (
    <ThemeProviderContext.Provider value={storeRef.current}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
export const useThemeStore = <T,>(selector: (store: ThemeStore) => T): T => {
  const themeStoreContext = useContext(ThemeProviderContext);
  if (!themeStoreContext) {
    throw new Error(`useThemeStore must be used within ThemeStoreProvider`);
  }
  return useStore(themeStoreContext, selector);
};
