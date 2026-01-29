import { NextResponse, NextRequest } from "next/server";
import { getCookie } from "./utils/cookie";

export default async function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname === "/signin" ||
    request.nextUrl.pathname === "/signup"
  ) {
    if (await getCookie("token")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/signin", "/signup", "/"],
};
