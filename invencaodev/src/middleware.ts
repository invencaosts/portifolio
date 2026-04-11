import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Desenvolvimento: libera tudo
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  // Bloquear versões legadas (v1, v2)
  if (pathname.startsWith("/v1") || pathname.startsWith("/v2")) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Se estiver acessando a rota específica /v3, redireciona para a raiz
  if (pathname.startsWith("/v3")) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (project images)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
};
