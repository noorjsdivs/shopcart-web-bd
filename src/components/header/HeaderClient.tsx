"use client";
import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import HeaderMenu from "./HeaderMenu";
import LanguageSwitcher from "./LanguageSwitcher";

interface Props {
  dictionary: any;
  lang: string;
}

const HeaderClient = ({ dictionary, lang }: Props) => {
  const getSignInUrl = "/sign-in";
  const SignUpUrl = "/sign-up";
  return (
    <Container className="flex items-center gap-5 justify-between">
      <Logo lang={lang} logoText={dictionary.logo} />
      {/* Navbar */}
      <HeaderMenu dictionary={dictionary} lang={lang} />
      {/* Icon */}
      <div className="flex items-center gap-2">
        <LanguageSwitcher lang={lang} />
        <Link
          href={getSignInUrl}
          className="bg-transparent border border-shop_btn_dark_green hover:bg-shop_btn_dark_green text-shop_btn_dark_green hover:text-shop_white p-2 text-xs rounded font-semibold hoverEffect"
        >
          Sign In
        </Link>
        <Link
          href={SignUpUrl}
          className="bg-shop_btn_dark_green border border-shop_btn_dark_green hover:bg-transparent hover:text-shop_btn_dark_green text-shop_white p-2 text-xs rounded font-semibold hoverEffect"
        >
          Sign Up
        </Link>
        <ModeToggle />
      </div>
    </Container>
  );
};

export default HeaderClient;
