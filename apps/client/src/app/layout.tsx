import { rubik } from "./fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Template",
  description: "A straightforward template for creating landing pages!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
