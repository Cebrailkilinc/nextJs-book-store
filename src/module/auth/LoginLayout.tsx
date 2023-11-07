'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from "react-hook-form"

//Services
import AuthService from '@/package/services/auth/AuthService';
//Types
import { AuthLoginForm } from '@/module/auth/types/types';
//Cookies
import { $auth, $cookie } from '@/package/utils';
import { verifyJwtToken } from '@/package/libs/auth';

import { alertControl, userLoginUpdate, messageControl } from './slice/auth.slices';
import { useAppDispatch } from '@/core/hooks';
import { Button } from '@chakra-ui/react';

const LoginLayout = () => {

  const router = useRouter();
  const dispatch = useAppDispatch();
  const authService = new AuthService();

  const [loading, setLoading] = useState<boolean>(false);


  const tokenFromCookie = $auth.getTokenFromCookie($cookie.get("bookstore.auth.token")) ?? '';
  const tokenVerified = verifyJwtToken(tokenFromCookie);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthLoginForm>()

  const handleRedirect = () => {
    router.push('/dashboard/register'); // '/about' sayfasına yönlendirir
  };



  // console.log($cookie.get("bookstore.auth.token"))  $cookie.get("bookstore.auth.token") => sifrelenmis token
  // $auth.getAccountFromCookie("bookstore.auth.token") => sifresi cozulmus token

  //If token is not verified delet token...
  useLayoutEffect(() => {
    if (!verifyJwtToken(tokenFromCookie)) {
      $cookie.del("bookstore.auth.token");
      router.push('/auth/login');
    }
  }, []);


  const onSubmit: SubmitHandler<AuthLoginForm> = (data) => {

    const userLoginData: AuthLoginForm = {
      email: data.email,
      password: data.password
    }
    setLoading(true)
    authService.login(userLoginData).then(async res => {
      console.log(verifyJwtToken(res.data?.token))
      console.log(res.data)
      console.log(userLoginData)
      try {
        if (res.data.success) {
          if (verifyJwtToken(res.data?.token)) {
            dispatch(userLoginUpdate(res.data?.success))
            $auth.createCookies(res.data.token)
            $cookie.set("username", res.data.username)
            dispatch(messageControl(res.data?.message))
            dispatch(alertControl(true))
            console.log(res.data)
            router.push('/')
          }
        }
        dispatch(messageControl(res.data?.message))
        dispatch(alertControl(true))
      } catch (error) {
        reset();
        console.log(error)
        window.alert(error)
      }

    })
  }

  return (
    <section className="h-screen flex justify-center items-center bg-slate-200">
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-3 px-12 py-5 bg-white rounded-md w-5/6 md:w-1/4' >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 40 40">
          <path fill="none" stroke="#4788c7" strokeMiterlimit="10" strokeWidth="2" d="M30,17.714c0,0,0-5.306,0-5.714 c0-5.523-4.477-10-10-10S10,6.477,10,12c0,0.408,0,5.714,0,5.714"></path><path fill="#dff0fe" d="M2.5,37.5V22c0-3.584,2.916-6.5,6.5-6.5h22c3.584,0,6.5,2.916,6.5,6.5v15.5H2.5z"></path><path fill="#4788c7" d="M31,16c3.308,0,6,2.692,6,6v15H3V22c0-3.308,2.692-6,6-6H31 M31,15H9c-3.866,0-7,3.134-7,7v16h36V22 C38,18.134,34.866,15,31,15L31,15z"></path><g><path fill="#b6dcfe" d="M17.59,32.5l0.891-5.343l-0.289-0.176C17.133,26.336,16.5,25.222,16.5,24c0-1.93,1.57-3.5,3.5-3.5 s3.5,1.57,3.5,3.5c0,1.222-0.633,2.336-1.691,2.981l-0.289,0.176L22.41,32.5H17.59z"></path><path fill="#4788c7" d="M20,21c1.654,0,3,1.346,3,3c0,1.046-0.543,2.001-1.452,2.554l-0.578,0.352l0.111,0.667L21.82,32 H18.18l0.738-4.427l0.111-0.667l-0.578-0.352C17.543,26.001,17,25.046,17,24C17,22.346,18.346,21,20,21 M20,20 c-2.209,0-4,1.791-4,4c0,1.449,0.778,2.707,1.932,3.408L17,33h6l-0.932-5.592C23.222,26.707,24,25.449,24,24 C24,21.791,22.209,20,20,20L20,20z"></path></g>
        </svg>
        <div className='flex flex-col text-[8px] w-full mt-2' >
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
            className={`border ${errors.email && "border-red-500 border-opacity-50"} outline-none text-[10px] px-2 py-2`} />
        </div>
        <div className='flex flex-col text-[8px] w-full' >
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
          })} type='password' placeholder='Password' className={`border ${errors.password && "border-red-500 border-opacity-50"} outline-none text-[10px] px-2 py-2`} />
        </div>
        <div className='flex flex-col items-center text-sm w-full' >
        
          <Button
            isLoading={loading}
            loadingText='Loading'
            colorScheme='purple'
            variant='outline'
            spinnerPlacement='start'
            type='submit'
            width='100%'
            size={'sm'}
          >
            Submit
          </Button>
        </div>
        <div className='flex flex-col gap-1 w-full h-10' >
          {
            errors.email && <span style={{ fontSize: "7px", paddingTop: "2px", paddingBottom: "2px", width: "100%" }}  >{errors.email.message}</span>
          }
          {
            errors.password && <span style={{ fontSize: "7px", paddingTop: "2px", paddingBottom: "2px", width: "100%" }} >{errors.password.message}</span>
          }
        </div>
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
        <div className='flex items-center justify-center text-[10px] gap-1' >
          Don't have an account?<h6 onClick={handleRedirect} className='text-orange-400 hover:text-opacity-80 cursor-pointer' >Register</h6>
        </div>
      </form>
    </section>
  )
}

export default LoginLayout;