"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n, Locale } from "../../../i18n-config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

interface LanguageSwitcherProps {
  lang: string;
}

const localeNames: Record<Locale, string> = {
  en: "English",
  it: "Italian",
  fr: "French",
  hi: "Hindi",
  ar: "Arabic",
};

const LanguageSwitcher = ({ lang }: LanguageSwitcherProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleLocaleChange = (locale: Locale) => {
    const newPath = redirectedPathName(locale);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          size={"sm"}
          className="flex items-center gap-1 border md:h-9.5"
        >
          <span className="font-semibold uppercase text-xs sm:text-sm">
            {lang}
          </span>
          <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLocaleChange(locale)}
            className={`cursor-pointer flex items-center gap-2 ${
              lang === locale ? "font-bold bg-gray-50 text-shop_dark_green" : ""
            }`}
          >
            <span className="uppercase text-xs font-semibold border p-1 rounded">
              {locale}
            </span>
            <span>{localeNames[locale]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
