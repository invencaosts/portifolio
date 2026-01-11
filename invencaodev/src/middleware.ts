import { NextRequest, NextResponse } from "next/server";

const MAINTENANCE = process.env.MAINTENANCE_MODE === "true";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Desenvolvimento: libera tudo
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  // Produção SEM manutenção: libera tudo
  if (!MAINTENANCE) {
    return NextResponse.next();
  }

  // Produção COM manutenção

  // Permitir assets e rotas internas
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Permitir apenas a home (manutenção)
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Bloquear todo o resto
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}
