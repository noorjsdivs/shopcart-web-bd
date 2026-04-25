import { Suspense } from "react";
import { Locale } from "../../../i18n-config";
import HeaderClient from "./HeaderClient";
import { getDictionary } from "@/lib/dictionary";
import AuthSidebar from "./AuthSidebar";

const Header = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <AuthSidebar dictionary={dictionary} lang={lang} />
      <header className="py-5 border-b border-b-border">
        <Suspense
          fallback={
            <div className="h-20 bg-white border-b border-gray-100 animate-pulse" />
          }
        >
          <HeaderClient dictionary={dictionary} lang={lang} />
        </Suspense>
      </header>
    </>
  );
};

export default Header;
