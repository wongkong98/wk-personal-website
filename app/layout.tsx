import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wong Kong | Full-Stack Software Developer",
  description:
    "Personal website for Wong Kong, a full-stack software developer building reliable web applications, AI tooling, and production-ready software systems.",
};

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
