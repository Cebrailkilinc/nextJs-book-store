'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import SearchBox from './SearchBox'

const Navbar = () => {
    const dropdpwnMenu = ["Favorite", "Cart", "Logout"]
    const router = useRouter();
    const handleRedirect = () => {
        router.push('/dashboard/login'); // '/about' sayfasına yönlendirir
    };
    return (
        <div className='bg-gray-100  fixed w-full shadow-sm px-5 md:px-0' >
            <div className='max-w-5xl mx-auto flex justify-between items-center ' >
                <div className='flex items-center gap-3' >
                    <img width="16" height="16" src="https://img.icons8.com/officel/16/homework.png" alt="homework" />
                    <h1>BookStore</h1>
                </div>
                <div>
                    <SearchBox/>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-2' >
                        <div>
                            <img width="28" height="28" src="https://img.icons8.com/color/48/user-male-circle--v1.png" alt="user-male-circle--v1" />
                        </div>
                        <div className='relative text-xs' >
                            <div className='peer py-5 cursor-pointer flex items-center hover:text-gray-500' >
                                <h1 className='' >Cebrail</h1>
                                <svg className='c' width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
                                        stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='hidden peer-hover:block hover:flex bg-white rounded-md py-3 px-3 absolute border' >
                                <ul className='text-xs flex flex-col gap-1' >
                                    {
                                        dropdpwnMenu && dropdpwnMenu.map((item, i) => {
                                            return <li key={i} className='hover:text-slate-800 cursor-pointer hover:bg-red-200 rounded-sm px-5 py-1'>{item}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex items-center gap-2 hover:text-gray-500 cursor-pointer' >
                        <img width="20" height="20" src="https://img.icons8.com/ultraviolet/40/shopping-cart.png" alt="shopping-cart" />
                        <span className="absolute -top-2 left-3 object-right-top -mr-6">
                            <div className="flex items-center w-4 h-4 p-1 text-center item-center justify-center border border-white rounded-full text-[7px] font-semibold bg-red-500 text-white">
                                6
                            </div>
                        </span>
                        <h1 className='text-xs' >Sepet</h1>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar