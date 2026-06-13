import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Analytics } from "@/components/Analytics";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
