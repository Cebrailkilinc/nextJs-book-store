import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { url, nextUrl, cookies } = request;
    const { value: token }: { value:string | null  } = cookies.get("token") ?? { value: null }   

   
    const hasVerifiedToken = true

    if (!hasVerifiedToken) {
        return NextResponse.redirect(new URL('/auth/login', url))
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/order" , "/auth/login"],
}