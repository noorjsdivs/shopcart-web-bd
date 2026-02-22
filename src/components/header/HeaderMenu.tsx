import { headerNavItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  dictionary: any;
  lang: string;
}

const HeaderMenu = ({ dictionary, lang }: Props) => {
  const pathname = usePathname();
  return (
    <div>
      <div className="hidden md:inline-flex items-center justify-center gap-7 text-sm uppercase font-semibold text-light-color">
        {headerNavItems?.map((item) => {
          // Manual Mapping based on en.json keys
          let label = item?.title;
          if (item.title === "Home") label = dictionary.header.menu.home;
          if (item.title === "Shop") label = dictionary.header.menu.shop;
          if (item.title === "Hot Deal") label = dictionary.header.menu.deals;
          if (item.title === "Contact") label = dictionary.header.menu.contact;
          if (item.title === "Blog") label = dictionary.header.menu.blog;

          const href = `/${lang}${item.href === "/" ? "" : item.href}`;
          const isActive = pathname === href || pathname === item.href; // Simple check

          return (
            <Link
              key={item?.title}
              href={href}
              className={cn(
                "hover:text-shop_light_green relative hoverEffect group",
                isActive && "text-shop_light_green",
              )}
            >
              {label}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 group-hover:left-0 hoverEffect",
                  isActive && "w-1/2",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-1/2 group-hover:right-0 hoverEffect",
                  isActive && "w-1/2",
                )}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderMenu;
