"use client";
import { headerNavItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenuItems = () => {
  const pathname = usePathname();
  return (
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
  );
};

export default NavMenuItems;
