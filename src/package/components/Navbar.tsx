'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SearchBox from "@/package/components/SearchBox";
import SignInUser from './SignInUser';
import SignOutUser from "@/package/components/SignOutUser"
import { cookies } from 'next/headers';
import Cookies from 'universal-cookie';
import Link from 'next/link';
import { verifyJwtToken } from '@/package/libs/auth/index';
import { NextResponse } from 'next/server';
import { $auth, $cookie, $crypto } from '../utils';
import { useAppSelector } from '@/core/hooks';

import Auth from '@/module/auth';

const Navbar = () => {

    const router = useRouter();
    const cookies = new Cookies();

    const { expired, token } = useAppSelector(data => data.counter)

    const handleRedirect = (path: string) => {
        router.push(path); // '/about' sayfasına yönlendirir
    };



    console.log($cookie.get("bookstore.auth.token"))
    console.log($auth.getTokenFromCookie($cookie.get("bookstore.auth.token")))


    return (
        <div className='bg-gray-100  fixed w-full shadow-sm px-5 md:px-0' >
            <div className='max-w-5xl mx-auto flex justify-between items-center ' >
                <div onClick={() => handleRedirect("/")} className='flex items-center gap-3 cursor-pointer' >
                    <img width="16" height="16" src="https://img.icons8.com/officel/16/homework.png" alt="homework" />
                    <h1>BookStore</h1>
                </div>
                <div>
                    <SearchBox />
                </div>
                <div className='flex items-center gap-5'>
                    <Auth/>
                    <Link href="/order" >
                        <div className='relative flex items-center gap-2 hover:text-gray-500 cursor-pointer' >
                            <img width="20" height="20" src="https://img.icons8.com/ultraviolet/40/shopping-cart.png" alt="shopping-cart" />
                            <span className="absolute -top-2 left-3 object-right-top -mr-6">
                                <div className="flex items-center w-4 h-4 p-1 text-center item-center justify-center border border-white rounded-full text-[7px] font-semibold bg-red-500 text-white">
                                    6
                                </div>
                            </span>
                            <h1 className='text-xs' >Sepet</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
