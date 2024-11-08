// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { adminAuth } from "./firebase_admin";
 // Инициализированный Firebase Admin SDK

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Проверка защищенных маршрутов, начинающихся с `/admin`
  if (url.pathname.startsWith("/admin")) {
    const authHeader = req.headers.get("Authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      // Перенаправление на страницу входа, если нет токена
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    try {
      // Проверка токена с помощью Firebase Admin SDK
      const decodedToken = await adminAuth.verifyIdToken(token);

      // Проверка на роль администратора
      if (decodedToken.role !== "admin") {
        url.pathname = "/403"; // Перенаправление на страницу доступа запрещено
        return NextResponse.redirect(url);
      }
    } catch (error) {
      console.error("Ошибка при проверке токена:", error);
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
