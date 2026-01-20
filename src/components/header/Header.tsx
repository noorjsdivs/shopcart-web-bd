import React from "react";
import Logo from "../common/Logo";
import Container from "../common/Container";
import { ModeToggle } from "../ui/mode-toggle";

const Header = () => {
  return (
    <header className="py-5 border-b border-b-border">
      <Container className="flex items-center gap-5 justify-between">
        <Logo />
        {/* Navbar */}
        <div>
          <p>Home</p>
        </div>
        {/* Icon */}
        <div>
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
};

export default Header;
