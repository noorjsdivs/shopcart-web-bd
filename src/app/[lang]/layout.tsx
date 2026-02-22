import type { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { i18n, Locale } from "../../../i18n-config";
import { getDictionary } from "@/lib/dictionary";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const raleway = localFont({
  src: "../../fonts/Raleway.woff2",
  variable: "--font-raleway",
  weight: "100 900",
});

const opensans = localFont({
  src: "../../fonts/Open Sans.woff2",
  variable: "--font-open-sans",
  weight: "100 800",
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

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${poppins.variable} ${raleway.variable} ${opensans.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
