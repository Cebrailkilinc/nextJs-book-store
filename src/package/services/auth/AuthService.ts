import { AuthLoginForm } from "@/module/auth/logins/types/types";
import { AuthRegisterPost } from "@/module/auth/register/types/type";
import IAuth from "@/package/services/auth/IAuthService";
import axios, { AxiosResponse } from "axios";

export default class AuthService implements IAuth {
    async login(data: AuthLoginForm): Promise<AxiosResponse> {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/login/auth", data);
            return response;
        } catch (error: any) {
            return error;
        }
    }

    async register(data: AuthRegisterPost): Promise<AxiosResponse> {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "login/register", data);
            return response;
        } catch (error: any) {
            return error;
        }
    }
}