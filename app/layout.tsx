import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aayush | 3D Portfolio",
  description: "Interactive Three.js portfolio built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body style={{ width: "100%", minHeight: "100%" }}>{children}</body>
    </html>
  );
}
