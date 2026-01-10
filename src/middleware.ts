import { jwtVerify } from "jose";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

const PRIVATE_ROUTES = ["/admin"];
const PUBLIC_ROUTES = ["/login"];

const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login";
const REDIRECT_WHEN_AUTHENTICATED = "/admin";

const SECRET_KEY = new TextEncoder().encode(
  process.env.MY_SECRET_KEY
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isPrivateRoute = PRIVATE_ROUTES.some(route =>
    pathname.startsWith(route)
  );

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  if (!token && isPrivateRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;
    return NextResponse.redirect(redirectUrl);
  }

  if (token) {
    try {
      await jwtVerify(token, SECRET_KEY);

      if (isPublicRoute) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = REDIRECT_WHEN_AUTHENTICATED;
        return NextResponse.redirect(redirectUrl);
      }

      return NextResponse.next();
    } catch (error) {
      const response = NextResponse.redirect(
        new URL(REDIRECT_WHEN_NOT_AUTHENTICATED, request.url)
      );

      response.cookies.delete("token");
      return response;
    }
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ["/login", "/admin/:path*"],
};
