import { AuthLoginForm } from "@/module/auth/types/types";
import { AuthRegisterPost } from "@/module/auth/types/types";
import IAuth from "@/package/services/auth/IAuthService";
import axios, { AxiosResponse } from "axios";

export default class AuthService implements IAuth {
    async login(data: AuthLoginForm): Promise<AxiosResponse> {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/auth/login", data);         
            return response;
        } catch (error: any) {
            return error;
        }
    }

    async register(data: AuthRegisterPost): Promise<AxiosResponse> {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL + "/auth/register", data);
            return response;
        } catch (error: any) {
            return error;
        }
    }
}