"use client";

import { ThemeProvider } from "./theme-provider";
import ActiveSectionProvider from "./active-section-provider";

type ProviderProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ActiveSectionProvider>{children}</ActiveSectionProvider>
    </ThemeProvider>
  );
}
