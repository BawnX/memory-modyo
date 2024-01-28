const availablePaths = ["home", "game"];

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const isPathname = availablePaths.some((path) => pathname === `/${path}`);

  if (isPathname) return;

  request.nextUrl.pathname = `/home`;
  // eslint-disable-next-line consistent-return
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
