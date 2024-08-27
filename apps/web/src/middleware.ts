import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { DEFAULT_LANG, SUPPORTED_LANGS } from "./i18n";

export const config = {
  matcher: ["/((?!api|static|_next|.*\\..*).*)"],
};

export async function middleware(req: NextRequest) {
  let url = req.url;
  let pathname =
    req.nextUrl.pathname + searchParamsToString(req.nextUrl.searchParams);

  // Check if the default locale is in the pathname
  if (
    pathname.startsWith(`/${DEFAULT_LANG}/`) ||
    pathname === `/${DEFAULT_LANG}`
  ) {
    // e.g. incoming request is /en/hello
    // The new URL is now /hello
    return NextResponse.redirect(new URL(stripDefaultLang(pathname), url));
  }

  const pathnameIsMissingLocale = SUPPORTED_LANGS.every(
    (lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`,
  );
  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming request is /hello
    // Tell Next.js it should pretend it's /en/hello
    pathname = `/${DEFAULT_LANG}${pathname}`;
  }

  if (pathname !== req.nextUrl.pathname) {
    return NextResponse.rewrite(new URL(pathname, url));
  }
}

function stripDefaultLang(pathname: string) {
  return pathname.replace(
    `/${DEFAULT_LANG}`,
    pathname === `/${DEFAULT_LANG}` ? "/" : "",
  );
}

function searchParamsToString(params: URLSearchParams) {
  const pairs: string[] = [];

  params.forEach((value, key) => {
    if (value !== "") {
      pairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    } else {
      pairs.push(encodeURIComponent(key));
    }
  });
  if (pairs.length === 0) {
    return "";
  }
  return "?" + pairs.join("&");
}
