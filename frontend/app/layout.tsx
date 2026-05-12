import type { Metadata } from "next";
import "./globals.css";
import { spirax, chivo, laila } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Everwisp",
  description: "Created by Sofia Moneta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`$ h-full antialiased`}>
      <body  className={`
        ${spirax.variable}
        ${chivo.variable}
        ${laila.variable}
        h-full
        antialiased
      `}>
        {children}
      </body>
    </html>
  );
}
