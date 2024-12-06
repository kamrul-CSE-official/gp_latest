import { NextRequest, NextResponse } from "next/server";
import { AUTH_KEY } from "./constant/storage.key";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/"];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtectedRoute = protectedRoutes.includes(pathname);
  const isPublicRoute = publicRoutes.includes(pathname);

  // Retrieve the auth token from cookies
  const cookie = req.cookies.get(AUTH_KEY)?.value;

  // Redirect to login if accessing a protected route without authentication
  if (isProtectedRoute && !cookie) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect to dashboard if accessing a public route while authenticated
  if (isPublicRoute && cookie) {
    const dashboardUrl = new URL("/dashboard", req.nextUrl.origin);
    return NextResponse.redirect(dashboardUrl);
  }

  // Allow other requests to proceed
  return NextResponse.next();
}
