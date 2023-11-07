import Link from 'next/link'
import React from 'react'

const dropdpwnMenu = [
  {
    name: "Giriş Yap",
    path: "/auth/login"
  },
  {
    name: "Kayıt Ol",
    path: "/auth/register"
  }
]

const SignOutUser = () => {
  return (
    <div className='flex items-center gap-2' >
      <div>
        <img width="28" height="28" src="https://img.icons8.com/color/48/user-male-circle--v1.png" alt="user-male-circle--v1" />
      </div>
      <div className='relative text-xs' >
        <div className='peer py-5 cursor-pointer flex items-center hover:text-gray-500' >
          <h1 className='' >Giriş Yapdd</h1>
          <svg className='c' width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"
              stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className='hidden peer-hover:block hover:flex bg-white  py-3  absolute border' >
          <ul className='text-xs flex flex-col gap-1 w-20' >
            {
              dropdpwnMenu && dropdpwnMenu.map((item, i) => {
                return (
                  <Link key={i} className='w-full' href={item.path}>
                    <li  className='hover:text-slate-800 cursor-pointer hover:bg-red-200 px-3 py-1'>{item.name}</li>
                  </Link>)
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SignOutUser