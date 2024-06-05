import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'sv'],
 
  // Used when no locale matches
  defaultLocale: 'sv'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(sv|en)/:path*']
};