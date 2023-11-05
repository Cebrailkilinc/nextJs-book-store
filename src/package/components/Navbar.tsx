'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SearchBox from "@/package/components/SearchBox";
import SignOutUser from "@/package/components/SignOutUser";
import Link from 'next/link';
import { $auth, $cookie } from '../utils';
import { useAppSelector } from '@/core/hooks';
import Auth from './Auth';
import { verifyJwtToken } from '../libs/auth';


const Navbar = () => {
    const router = useRouter();
    const { token } = useAppSelector(state => state.auth)

    const [user, setUser] = useState<boolean>(false);

    const getToken = $auth.getTokenFromCookie($cookie.get("bookstore.auth.token")) ?? '';
    const verifiedTokenControl = verifyJwtToken(getToken);

    const handleRedirect = (path: string) => {
        router.push(path); // '/about' sayfasına yönlendirir
    };
   
    return (
        <div className='bg-gray-100 z-40  fixed w-full shadow-sm px-5 md:px-0' >
            <div className='max-w-5xl mx-auto flex justify-between items-center ' >
                <div onClick={() => handleRedirect("/")} className='flex items-center gap-3 cursor-pointer' >
                    <img width="16" height="16" src="https://img.icons8.com/officel/16/homework.png" alt="homework" />
                    <h1>BookStore</h1>
                </div>
                <div>
                    <SearchBox />
                </div>
                <div className='flex items-center gap-5'>
                    <Auth />
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
