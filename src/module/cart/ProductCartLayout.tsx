import React from 'react'

const ProductCartLayout = () => {
    return (
        <div className="container left-0 right-0 mx-auto">
            <div className="flex shadow-md ">
                <div className="w-3/4 bg-white px-10 py-5 ">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">3 Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5 bg-gray-200 p-4">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
                    </div>
                    <div className='overflow-scroll  max-h-96 px-2'>
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="w-20">
                                    <img className="h-24" src="" alt="" />
                                </div>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">Iphone 6S</span>
                                    <span className="text-red-500 text-xs">Apple</span>
                                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5">
                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                                <input className="mx-2 border text-center w-8 outline-none" type="text" />
                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                            </div>
                            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                        </div>
                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="w-20">
                                    <img className="h-24" src="" alt="" />
                                </div>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">Iphone 6S</span>
                                    <span className="text-red-500 text-xs">Apple</span>
                                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5">
                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>

                                <input className="mx-2 border text-center w-8 outline-none" type="text" />

                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                            </div>
                            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                        </div>


                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="w-20">
                                    <img className="h-24" src="" alt="" />
                                </div>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">Xiaomi Mi 20000mAh</span>
                                    <span className="text-red-500 text-xs">Xiaomi</span>
                                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5">
                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>

                                <input className="mx-2 border text-center w-8" type="text" />

                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                            </div>
                            <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
                            <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                            <div className="flex w-2/5">
                                <div className="w-20">
                                    <img className="h-24" src="" alt="" />
                                </div>
                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                    <span className="font-bold text-sm">Airpods</span>
                                    <span className="text-red-500 text-xs">Apple</span>
                                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/5">
                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                                <input className="mx-2 border text-center w-8" type="text"  />
                                <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                            </div>
                            <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
                            <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
                        </div>
                    </div>
                    <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">

                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continue Shopping
                    </a>
                </div>
                <div id="summary" className="w-1/4  py-5 bg-gray-100 m-5 rounded ">
                    <h1 className="font-semibold text-2xl border-b pb-8 px-5">Order Summary</h1>
                   <div className='px-8'> 
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items 3</span>
                            <span className="font-semibold text-sm">590$</span>
                        </div>
                        <div className="py-5">
                            <label htmlFor="promo" className="font-semibold inline-block  text-xs uppercase">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full outline-none bg-transparent border border-gray-500" />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>$600</span>
                            </div>
                            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductCartLayout;