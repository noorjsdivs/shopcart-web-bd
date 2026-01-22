"use client";
import Logo from "../common/Logo";
import Container from "../common/Container";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { headerNavItems } from "@/constants/data";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const getSignInUrl = "/sign-in";
  const SignUpUrl = "/sign-up";

  return (
    <header className="py-5 border-b border-b-border">
      <Container className="flex items-center gap-5 justify-between">
        <Logo />
        {/* Navbar */}
        <div className="hidden md:inline-flex items-center justify-center gap-7 text-sm uppercase font-semibold text-light-color">
          {headerNavItems?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={cn(
                "hover:text-shop_light_green relative hoverEffect group",
                pathname === item?.href && "text-shop_light_green",
              )}
            >
              {item?.title}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 group-hover:left-0 hoverEffect",
                  pathname === item?.href && "w-1/2",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 group-hover:right-0 hoverEffect",
                  pathname === item?.href && "w-1/2",
                )}
              />
            </Link>
          ))}
        </div>
        {/* Icon */}
        <div className="flex items-center gap-2">
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
    </header>
  );
};

export default Header;
