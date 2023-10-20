import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAuthPage } from "@/package/libs/auth/index";


const AUTH_PAGES = ["/auth/login", "/auth/register",]

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const { url, nextUrl, cookies } = request;
    const { value: token }: { value: string | null } = cookies.get("token") ?? { value: null }

    const hasVerifiedToken = false

    const isAuthPageRequested = isAuthPage(AUTH_PAGES, nextUrl.pathname);

    console.log(isAuthPageRequested, nextUrl.pathname,cookies.get("token"))
    if (isAuthPageRequested) {
        if (!hasVerifiedToken) {
            const response = NextResponse.next();
            return response;
        }

        return NextResponse.redirect(new URL('/', url))
    }

    if (!hasVerifiedToken) {
        return NextResponse.redirect(new URL('/auth/login', url))
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/order", "/auth/login"],
}