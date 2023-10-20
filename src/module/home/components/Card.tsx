"use client"
import React from 'react'
import { MdFavoriteBorder,MdFavorite } from "react-icons/md"
import { useRouter } from 'next/navigation'

const Card = () => {
    const router = useRouter()
 
    return (
        <div onClick={() => router.push('product/1')} className=" relative max-w-[200px] rounded overflow-hidden shadow-sm hover:shadow-xl hover:bg-gray-100 cursor-pointer">
            <div className='absolute left-2 top-2 bg-white rounded-full p-1 ' >
                <MdFavoriteBorder className="hover:text-orange-400" />
            </div>
            <div className='absolute right-0 top-2 bg-green-700  px-2 py-0.5 text-white  rounded-s-full' >
               <h1 className='text-[7px]' >İndirimli Ürün</h1>
            </div>
            <img className="w-full h" src="https://picsum.photos/200" alt="Sunset in the mountains" />
            <div className="px-6 py-3">
                <div className="font-bold text-sm mb-2 text-start">The Coldest Sunset</div>
                <p className="text-gray-700 text-[10px]">
                    Lorem ipsum dolor sit amet
                </p>
            </div>
            <div className="flex items-center gap-2 px-6 pt-2 pb-2">
                <h1 className='bg-green-600 text-white px-1 py-2 rounded-sm' >%20</h1>
                <div> 
                    <h4 className='text-xs line-through text-gray-600 '>320,50</h4>
                    <h1 className='font-semibold' >287,88</h1>
                </div>           
            </div>
        </div>
    )
}

export default Card