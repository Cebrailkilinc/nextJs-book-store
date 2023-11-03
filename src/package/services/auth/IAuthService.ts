import { AuthLoginForm, AuthRegisterPost } from "@/module/auth/types/types";

export default interface IAuth{
    register(data: AuthLoginForm):void;
    login(data: AuthRegisterPost):void;
}