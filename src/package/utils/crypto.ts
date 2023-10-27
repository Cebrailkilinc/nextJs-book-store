import CryptoJS from 'crypto-js';

type WordArray = CryptoJS.lib.WordArray;

export namespace $crypto {
  export const prepareSecret = (key?: WordArray | string) => {
    return key || process.env.NEXT_PUBLIC_CRYPT_KEY || '';
  };

  export const encryptWithAES = (text: string, secret?: WordArray | string) => {
    const key = $crypto.prepareSecret(secret);
    const encrypted = CryptoJS.AES.encrypt(text, key);

    return encrypted.toString();
  };

  export const decryptWithAES = (text: string, secret?: WordArray | string) => {
    const key = $crypto.prepareSecret(secret);
    const decrypted = CryptoJS.AES.decrypt(text, key);

    return decrypted.toString(CryptoJS.enc.Utf8);
  };
}
