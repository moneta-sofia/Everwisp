import { Spirax, Chivo, Laila } from "next/font/google";

export const spirax = Spirax({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-spirax",
});

export const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
});

export const laila = Laila({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-laila",
});