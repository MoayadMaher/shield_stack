import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NEXT_URL } from "../config";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log(token);
  const { pathname } = req.nextUrl;

  if (token && pathname.startsWith("/login")) {
    return NextResponse.redirect(NEXT_URL);
  }

  if (!token && pathname.startsWith("/services")) {
    // const url = req.nextUrl.clone();
    return NextResponse.redirect(`${NEXT_URL}/login`);
  }

  return NextResponse.next();
}
