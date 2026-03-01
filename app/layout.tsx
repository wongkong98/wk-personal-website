import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeToggle from "@/components/ThemeToggle";
import TabsLine from "@/components/TabsLine";
import localFont from 'next/font/local';

export const rubik = localFont({
  src: './fonts/Rubik-Regular.ttf',
  variable: '--font-rubik',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wong Kong - Personal Website",
  description: "A personal website built with Next.js, Tailwind CSS, and Supabase.",
};

const tabs = [
  { href: "#hero", label: "Hero" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body
          className={`antialiased ${rubik.className} font-sans bg-zinc-50 dark:bg-black text-black dark:text-white`}
        >
          <TabsLine tabs={tabs} />

          <ThemeToggle />
          {children}
        </body>
      </TooltipProvider>
    </html>
  );
}
