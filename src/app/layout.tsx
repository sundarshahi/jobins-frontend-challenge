import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

import "./globals.css";

const public_sans = Public_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JoBins",
  description: "Frontend-challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${public_sans.className} antialiased`}>{children}</body>
    </html>
  );
}
