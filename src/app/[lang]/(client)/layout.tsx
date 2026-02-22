import Header from "@/components/header/Header";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "../../../../i18n-config";

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
    <div>
      <Header lang={lang as Locale} />
      {children}
    </div>
  );
}
