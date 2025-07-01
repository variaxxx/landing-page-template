import { Geist, Geist_Mono, Rubik } from "next/font/google";

export const rubik = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin", "cyrillic"],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
