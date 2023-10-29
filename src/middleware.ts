import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { isAuthPage, verifyJwtToken } from "@/package/libs/auth/index";
import { $auth, $cookie } from './package/utils';


const AUTH_PAGES = ["/auth/login"]
const secret = new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',)

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const { url, nextUrl, cookies } = request;
    const token:any = cookies.get("bookstore.auth.token")?.value

    const tokenEncrypt = token && $auth.getTokenFromCookie(token)

    const hasVerifiedToken =  verifyJwtToken(tokenEncrypt);
    const isAuthPageRequested = isAuthPage(AUTH_PAGES, nextUrl.pathname);
    console.log("Fonksiyonun cevabı: ", hasVerifiedToken, cookies.get("bookstore.auth.token")?.value )

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