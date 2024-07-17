import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
};

interface ThemeActions {
  setTheme: (theme: Theme) => void;
}

export type ThemeStore = ThemeState & ThemeActions;

export const initThemeStore = (): ThemeState => {
  return { theme: "light" };
};

export const createThemeStore = (initState: ThemeState) => {
  return create<ThemeStore>()(
    persist(
      (set) => ({
        ...initState,
        setTheme: (theme: Theme) => set({ theme }),
      }),
      {
        name: "theme",
        storage: createJSONStorage(() => localStorage),
      }
    )
  );
};
