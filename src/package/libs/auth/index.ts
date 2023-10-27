
export function verifyJwtToken(token: string) {
    try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        const expired = decoded.exp < Date.now() / 1000;
        return !expired
    } catch (e) {
        return false;
    }
}



export const isAuthPage = (AUTH_PAGES: string[], url: string) => AUTH_PAGES.some(page => page.startsWith(url))