import React from "react";
import AuthHeader from "./_components/AuthHeader";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthHeader />
      {children}
    </div>
  );
};

export default RootLayout;
