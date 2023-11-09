export type AuthLoginForm = {   
    email: string
    password: string   
}

export type AuthRegisterForm = {
    fullname: string
    email: string
    password: string
    confirmPassword: string
}

export type AuthRegisterPost = {
    username: string
    email: string
    password: string   
}

export type AuthResponse = {
    token: string;
    expired: boolean;
    loginSuccess:boolean;
    message:string,
    infoType:"loading" | "info" | "warning" | "success" | "error" | undefined
    
  }
  