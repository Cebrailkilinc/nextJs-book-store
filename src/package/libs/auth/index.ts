async function verifyJwtToken(token:string) {
    
}



export const isAuthPage = (AUTH_PAGES:string[] ,url:string) => AUTH_PAGES.some(page =>page.startsWith(url))