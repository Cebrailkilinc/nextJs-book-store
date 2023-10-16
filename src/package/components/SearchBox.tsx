import React from 'react'

const SearchBox = () => {
    return (
        <div className='hidden border md:flex items-center justify-between gap-3 pl-2 w-72 lg:w-96 ' >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 40 40">
                <path fill="#b6c9d6" d="M3.499,38.5c-0.534,0-1.036-0.208-1.414-0.585S1.5,37.035,1.5,36.501s0.208-1.036,0.585-1.414 l18.233-17.382l1.983,1.985L4.904,37.923C4.535,38.292,4.033,38.5,3.499,38.5z"></path><path fill="#788b9c" d="M20.31,18.405l1.293,1.294L4.559,37.561C4.276,37.844,3.899,38,3.499,38 c-0.4,0-0.777-0.156-1.06-0.439c-0.584-0.584-0.584-1.535-0.017-2.103L20.31,18.405 M20.327,17.007L1.732,34.734 c-0.976,0.976-0.976,2.558,0,3.534v0C2.22,38.756,2.859,39,3.499,39c0.64,0,1.279-0.244,1.767-0.732L23,19.683L20.327,17.007 L20.327,17.007z"></path><g><path fill="#d1edff" d="M26,26.5c-6.893,0-12.5-5.607-12.5-12.5S19.107,1.5,26,1.5S38.5,7.107,38.5,14S32.893,26.5,26,26.5z"></path><path fill="#788b9c" d="M26,2c6.617,0,12,5.383,12,12s-5.383,12-12,12s-12-5.383-12-12S19.383,2,26,2 M26,1 c-7.18,0-13,5.82-13,13c0,7.18,5.82,13,13,13s13-5.82,13-13C39,6.82,33.18,1,26,1L26,1z"></path></g>
            </svg>
            <input className='bg-transparent outline-none placeholder:text-xs text-xs w-full' placeholder='Kitap ara..' />
            <button className="text-white bg-indigo-700 py-1 px-3 text-sm hover:bg-opacity-90" >Ara</button>
        </div>
    )
}

export default SearchBox