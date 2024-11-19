import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import { db } from './firebase/firebase_config';
import { doc, getDoc } from 'firebase/firestore';

export default async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;


  const intlMiddleware = createMiddleware(routing);
  const response = intlMiddleware(req);

  return response;
}

export const config = {
  matcher: [
    '/',
    '/(ru|cs|en)/:path*', // Поддержка локализации
    '/admin/:path*'       // Применение middleware для всех подстраниц админки
  ],
};
