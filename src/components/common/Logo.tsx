import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2 className="text-lg uppercase font-semibold text-shop_dark_green">
        Shopcart
      </h2>
    </Link>
  );
};

export default Logo;
