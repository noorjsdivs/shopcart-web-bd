"use client";

import useCartStore from "@/store/store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { SignIn, SignUp } from "@clerk/nextjs";

interface Props {
  dictionary: any;
  lang: string;
}

const AuthSidebar = ({ dictionary, lang }: Props) => {
  const { isAuthSidebarOpen, closeAuthSidebar, openAuthSidebar, authMode } =
    useCartStore();
  const pathname = usePathname();

  //   Close sidebar on route change

  useEffect(() => {
    closeAuthSidebar();
  }, [pathname]);

  return (
    <Sheet open={isAuthSidebarOpen} onOpenChange={closeAuthSidebar}>
      <SheetContent className="w-[90%] sm:w-150 sm:max-w-none border-l-0 rounded-l-3xl bg-white shadow-2xl h-[calc(100vh-20px)] overflow-y-auto m-2.5 p-0">
        <div className="flex flex-col h-full justify-center items-center px-4 py-8 md:px-8">
          <SheetHeader className="mb-8">
            <SheetTitle className="text-3xl font-bold text-center mb-2">
              {authMode === "signIn"
                ? dictionary.header.auth.welcomeBack
                : dictionary.header.auth.createAccount}
            </SheetTitle>
            <SheetDescription className="text-center text-lg">
              {authMode === "signIn"
                ? dictionary.header.auth.signInDescription
                : dictionary.header.auth.signUpDescription}
            </SheetDescription>
          </SheetHeader>
          <div className="w-full max-w-100 mx-auto flex justify-center">
            {authMode === "signIn" ? <SignIn /> : <SignUp />}
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">
            {authMode === "signIn" ? (
              <div className="flex items-center gap-1">
                <p>Don&apos;t have an account</p>
                <button
                  onClick={() => openAuthSidebar("signUp")}
                  className="font-semibold text-shop_dark_green hover:underline hoverEffect"
                >
                  Sign up
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <p>Alreay have an account</p>
                <button
                  onClick={() => openAuthSidebar("signIn")}
                  className="font-semibold text-shop_dark_green hover:underline hoverEffect"
                >
                  Sign in
                </button>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AuthSidebar;
