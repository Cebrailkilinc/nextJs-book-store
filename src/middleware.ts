import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { isAuthPage, verifyJwtToken } from "@/package/libs/auth/index";


const AUTH_PAGES = ["/auth/login"]
const secret = new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',)

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const { url, nextUrl, cookies } = request;
    const { value: token }: { value: string | null } = cookies.get("token") ?? { value: null }


    let hasVerifiedToken = token && await verifyJwtToken(token);
    const isAuthPageRequested = isAuthPage(AUTH_PAGES, nextUrl.pathname);
    console.log("Fonksiyonun cevabı: ", hasVerifiedToken, token)

    if (isAuthPageRequested) {
        if (!hasVerifiedToken) {
            return NextResponse.next();
        }
        const response = NextResponse.redirect(new URL('/', url))
        return response
    }

    if (!hasVerifiedToken) {
        return NextResponse.redirect(new URL('/auth/login', url))
    }

    //NextResponse.redirect(new URL('/auth/login', url))
    // NextResponse.next()

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/order", "/auth/login"], //Kimlik dogrulamasina ihtiyac duyulan sayfalar
}