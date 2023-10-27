import { $cookie } from "./cookie";
import { $crypto } from "./crypto";

export namespace $auth {
    export const getTokenFromCookie = (initialCookie?: string) => {
        try {
            const cookie = initialCookie ?? $cookie.get('bookstore.auth.token')!;
            const decrypted = $crypto.decryptWithAES(cookie);
            return decrypted ?? null;
        } catch (e) {
            return null;
        }
    };

    export const createCookies = (state: any) => {
        if (!state) return;

        const encryptedAccount = $crypto.encryptWithAES(JSON.stringify(state));
        const encryptedToken = $crypto.encryptWithAES(state!);

        $cookie.set('roadmape.app.auth.account', encryptedAccount, {
            maxAge: 1704085200, // A month
        });

        $cookie.set('bookstore.auth.token', encryptedToken, {
            maxAge: 1704085200, // A month
        });
    };

    export const getAccountFromCookie = (initialCookie?: string) => {
        try {
            const cookie = initialCookie ?? $cookie.get('bookstore.auth.account')!;
            const decrypted = $crypto.decryptWithAES(cookie);
            return JSON.parse(decrypted) ?? null;
        } catch (e) {
            return null;
        }
    };
}

// export const createCookiesWithAction = (action: PayloadAction<LoginResponse>) => {
//     if (!action.payload) return;

//     const encryptedAccount = $crypto.encryptWithAES(JSON.stringify(action.payload));
//     const encryptedToken = $crypto.encryptWithAES(action.payload.jwtToken!);

//     $cookie.set('roadmape.app.auth.account', encryptedAccount, {
//       maxAge: 1704085200, // A month
//     });

//     $cookie.set('roadmape.app.auth.token', encryptedToken, {
//       maxAge: 1704085200, // A month
//     });
//   };


