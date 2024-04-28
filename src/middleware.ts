import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log(token);
  const { pathname } = req.nextUrl;

  if (!token && pathname.startsWith("/services")) {
    const url = req.nextUrl.clone();
    url.pathname = "/api/auth/signin";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
