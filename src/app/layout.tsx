import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shopcartpro.reactbd.org/"),
  title: {
    template: "%s | Shopcart - Premimum Online Shopping",
    default: "Shopcart Ecommerce Application",
  },
  description:
    "Shopcart is a premium online shopping platform offering a wide range of products with seamless user experience.",
  keywords: [
    "online shopping",
    "ecommerce",
    "Shopcart",
    "premium products",
    "shopping platform",
    "user experience",
    "buy online",
    "shop online",
    "retail",
    "fashion",
    "electronics",
  ],
  authors: [{ name: "Shopcart", url: "https://shopcartpro.reactbd.org/" }],
  creator: "Shopcart Team",
  publisher: "Shopcart Inc.",
  alternates: {
    canonical: "https://shopcartpro.reactbd.org/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
