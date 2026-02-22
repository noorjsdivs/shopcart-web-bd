import { clerkMiddleware } from "@clerk/nextjs/server";
import { i18n } from "./i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly but negotiator expects an array`
  const locales: string[] = i18n.locales;
  let language = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );
  return matchLocale(language, locales, i18n.defaultLocale);
}

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname;

  // check if locale is missing in the pathname
  // Exclude likely static files, API routes, and Next.js internals
  if (
    !pathname.startsWith("/_next") &&
    !pathname.includes("/api/") &&
    !pathname.startsWith("/studio") &&
    !pathname.includes(".")
  ) {
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    );
    if (pathnameIsMissingLocale) {
      const locale = getLocale(req);

      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
          req.url,
        ),
      );
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
