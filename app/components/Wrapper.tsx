"use client";
import { useThemeStore } from "@/providers/ThemeProvider";

function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useThemeStore((state) => state);
  return <div className={theme}>{children}</div>;
}

export default Wrapper;
