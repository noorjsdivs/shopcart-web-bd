import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "default" | "sm";
  lang?: string;
  logoText?: {
    first: string;
    second: string;
  };
}

const Logo = ({ className, lang, logoText }: LogoProps) => {
  return (
    <Link href={"/"}>
      <div
        className={cn("flex items-center gap-2 group hoverEffect", className)}
      >
        {/* Cart icon with creative styling */}
        <div className="relative">
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-shop_orange rounded-full animate-pulse group-hover:bg-shop_light_green hoverEffect" />
          <ShoppingCart
            className="w-8 h-8 text-shop_dark_green dark:text-shop_light_green group-hover:text-shop_light_green hoverEffect group-hover:scale-110"
            strokeWidth={2.5}
          />
        </div>
        {/* Text logo */}
        <div className="flex items-center">
          <h2 className="text-2xl font-bold uppercase tracking-wide font-sans">
            <span className="text-shop_dark_green dark:text-shop_light_green group-hover:text-shop_light_green hoverEffect">
              {logoText?.first}
            </span>
            <span className="bg-linear-to-r from-shop_light_green to-shop_orange bg-clip-text text-transparent group-hover:from-shop_dark_green dark:group-hover:from-shop_orange group-hover:to-shop_light_green hoverEffect">
              {logoText?.second}
            </span>
          </h2>
          {/* Decorative Element */}
          <div className="ml-1 flex flex-col gap-0.5">
            <div className="w-1 h-1 bg-shop_orange rounded-full group-hover:bg-shop_light_green hoverEffect" />
            <div className="w-1 h-1 bg-shop_light_green rounded-full group-hover:bg-shop_orange hoverEffect" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
