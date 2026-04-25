"use client";
import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import Link from "next/link";
import { ModeToggle } from "../ui/mode-toggle";
import HeaderMenu from "./HeaderMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { ClerkLoaded, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { User } from "lucide-react";
import useCartStore from "@/store/store";
import UserDropdown from "./UserDropdown";

interface Props {
  dictionary: any;
  lang: string;
}

const HeaderClient = ({ dictionary, lang }: Props) => {
  const { openAuthSidebar, isAuthSidebarOpen } = useCartStore();
  console.log(isAuthSidebarOpen);

  return (
    <Container className="flex items-center gap-5 justify-between">
      <Logo lang={lang} logoText={dictionary.logo} />
      {/* Navbar */}
      <HeaderMenu dictionary={dictionary} lang={lang} />
      {/* Icon */}
      <div className="flex items-center gap-2">
        <LanguageSwitcher lang={lang} />

        <ModeToggle />
        <ClerkLoaded>
          <SignedIn>
            <UserDropdown dictionary={dictionary} lang={lang} />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-1">
              <button
                onClick={() => openAuthSidebar("signIn")}
                className="group"
              >
                <User className="group-hover:text-shop_light_green hoverEffect" />
              </button>
            </div>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </Container>
  );
};

export default HeaderClient;
