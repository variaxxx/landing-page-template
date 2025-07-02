import { rubik } from "../ui/fonts";
import type { Metadata } from "next";
import "@/styles/globals.css";

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
