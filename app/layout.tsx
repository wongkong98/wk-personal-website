import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeToggle from "@/components/ThemeToggle";
import TabsLine from "@/components/TabsLine";
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: "Wong Kong | Full-Stack Software Developer",
  description:
    "Personal website for Wong Kong, a full-stack software developer building reliable web applications, AI tooling, and production-ready software systems.",
};

const tabs = [
  { value: "home", label: "Home" },
  { value: "about", label: "About" },
  { value: "projects", label: "Projects" },
  { value: "contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var storageKey = "wk-theme";
                var storedTheme = localStorage.getItem(storageKey);
                var preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                var theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : preferredTheme;
                document.documentElement.classList.toggle("dark", theme === "dark");
                document.documentElement.style.colorScheme = theme;
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
