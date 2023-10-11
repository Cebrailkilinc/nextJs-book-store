import { AuthRegisterPost } from "@/module/auth/register/types/type";
import IAuth from "@/package/services/auth/IAuthService";
import axios, { AxiosResponse } from "axios";

export default class AuthService implements IAuth {
    login(data: any): void {
        throw new Error("Method not implemented.");
    }

    async register(data: AuthRegisterPost): Promise<AxiosResponse> {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/register", data);
            return response;
        } catch (error: any) {
            return error;
        }
    }
}