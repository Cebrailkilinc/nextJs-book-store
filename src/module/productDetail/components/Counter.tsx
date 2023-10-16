import React from 'react'

const Counter = () => {
    return (
        <div className='max-w-10 flex items-center gap-1 border border-gray-200 rounded-sm' >
            <button className='bg-blue-800 w-5  rounded-s-sm text-white hover:opacity-90'>-</button>
            <input className='w-8 text-center outline-none' type='number' defaultValue={0} />
            <button className='bg-blue-800 w-5 rounded-e-sm text-white hover:opacity-90' >+</button>
        </div>
    )
}

export default Counter