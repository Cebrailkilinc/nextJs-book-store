'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from "react-hook-form"
import AuthService from '@/package/services/auth/AuthService';
import { AuthLoginForm } from '@/module/auth/types/types';
import Cookies from 'universal-cookie';

type Inputs = {
  email: string
  password: string
}

const Login = () => {

  const router = useRouter();
  const authService = new AuthService();
  const cookies = new Cookies();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>()

  const handleRedirect = () => {
    router.push('/dashboard/register'); // '/about' sayfasına yönlendirir
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const userLoginData: AuthLoginForm = {
      email: data.email,
      password: data.password
    }
    authService.login(userLoginData).then(async res => {
      console.log(res.data)
      await cookies.set("token", res.data)
      reset();
    })
    console.log(data)
    reset();
  }
  console.log(errors.email?.message)
  return (
    <section className="h-screen flex justify-center items-center bg-slate-200">
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-3 p-10 bg-white rounded-md w-5/6 md:w-1/3 lg:w-1/4' >
        <h1 className='text-5xl text-gray-500'>Login</h1>
        <div className='flex flex-col text-sm w-full mt-2' >
          <input
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format!",
              },
            })}
            type='email'
            placeholder='Email'
            className={`border ${errors.email && "border-red-500"} outline-none text-xs px-2 py-2`} />
        </div>
        <div className='flex flex-col text-sm w-full' >
          <input {...register("password", {
            required: "Password is required!",
            minLength: {
              value: 5,
              message: "Min length is 5!",
            },
            maxLength: {
              value: 20,
              message: "max length is 20!",
            },
          })} type='password' placeholder='Password' className={`border ${errors.password && "border-red-500"} outline-none text-xs px-2 py-2`} />
        </div>
        <div className='flex flex-col items-center text-sm w-full' >
          <button type='submit' className='border w-full px-3 py-2 mt-2 rounded-sm bg-blue-500 hover:bg-opacity-80 text-white text-xs' >Login</button>
        </div>
        <p className='text-[10px] h-4 text-red-700 flex flex-col justify-start w-full px-1' >
          {errors.email && <span role="alert">{errors.email.message}</span>}
          {errors.password && <span className='' >{errors.password.message}</span>}
        </p>
        <div className='flex items-center justify-center w-full gap-3 text-xs' >
          <div className='w-full border-b ' ></div>
          <p>Or</p>
          <div className='w-full border-b ' ></div>
        </div>
        <div className='flex items-center justify-center gap-3'>
          <div>
            <svg className='hover:opacity-40 cursor-pointer' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
          </div>
          <div>
            <svg className='hover:opacity-40 cursor-pointer' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
              <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0"
              ></stop><stop offset="1" ></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
            </svg>
          </div>
        </div>
        <div className='flex items-center justify-center text-xs gap-1' >
          Don't have an account?<h6 onClick={handleRedirect} className='text-orange-400 hover:text-opacity-80 cursor-pointer' >Register</h6>
        </div>
      </form>
    </section>
  )
}

export default Login;