import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { adminAuth } from "./firebase_admin";

export async function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
