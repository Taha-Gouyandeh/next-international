import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["fa", "en"],
  defaultLocale: "fa",
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/", "/(fa|en)/:path*"],
};
