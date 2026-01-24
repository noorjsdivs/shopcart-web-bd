import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const AuthHeader = () => {
  return (
    <div className="bg-linear-to-br from-shop_orange/5 via-shop_light_bg to-shop_light_pink/60">
      <Container className="flex items-center justify-between py-5">
        <Link href={"/"} className="flex items-center gap-2">
          <ArrowLeft />
          <span className="font-medium">Back to Home</span>
        </Link>
        <Logo />
      </Container>
    </div>
  );
};

export default AuthHeader;
