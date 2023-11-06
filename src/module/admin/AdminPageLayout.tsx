"use client"
import React from 'react'
import { Alert, Button, Checkbox, Form, Input, Spin } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthLoginForm } from '@/module/auth/types/types';
import { AddBook } from './types';
import FileUploads from './components/FileUploads';



const AdminPageLayout = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AddBook>()


    const onSubmit: SubmitHandler<AddBook> = (data) => {

        console.log(data)

    }

    return (
        <div className='grid grid-cols-12 gap-5 max-w-5xl mx-auto pt-20' >
            <div className='col-span-2 '  >
               <ul>
                <li>Users</li>
                <li>Customers</li>
                <li>Add Product</li>
                <li>Add Product</li>
                <li>Add Product</li>
               </ul>
            </div>

            <div className=' col-span-10  ' >
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2' >
                    <div className='flex flex-col text-[8px] w-full mt-1' >
                        <h1 className='text-xs' >Book Name:</h1>
                        <input
                            {...register("bookName", {
                                required: "Book name is required!",
                            })}
                            type='text'
                            className={`border border-indigo-700 ${errors.bookName && "border-red-500 border-opacity-50"} outline-none text-[10px] px-2 py-1`} />
                        {
                            errors.bookName && <span style={{ fontSize: "7px", paddingTop: "2px", paddingBottom: "2px", width: "100%" }} className='text-red-600' >{errors.bookName.message}</span>
                        }
                    </div>
                    <div className='flex flex-col text-[8px] w-full mt-1'>
                        <h1 className='text-xs'>Description:</h1>
                        <input
                            {...register("desc", {
                                required: "Description is required!",
                            })}
                            type='text'
                            className={`border border-indigo-700 ${errors.desc && "border-red-500 border-opacity-50"} outline-none text-[10px] px-2 py-1`} />
                        {
                            errors.desc && <span style={{ fontSize: "7px", paddingTop: "2px", paddingBottom: "2px", width: "100%" }} className='text-red-600' >{errors.desc.message}</span>
                        }
                    </div>
                    <div className='flex flex-col text-[8px] w-full mt-1'>
                        <h1 className='text-xs'>Author:</h1>
                        <input
                            {...register("author", {
                                required: "Author is required!",
                            })}
                            type='text'
                            className={`border border-indigo-700 ${errors.author && "border-red-500 border-opacity-50"} outline-none text-[10px] px-2 py-1`} />
                        {
                            errors.author && <span style={{ fontSize: "7px", paddingTop: "2px", paddingBottom: "2px", width: "100%" }} className='text-red-600' >{errors.author.message}</span>
                        }
                    </div>
                    <div className='flex flex-col text-[8px] w-full mt-1'>
                        <h1 className='text-xs'>Price:</h1>
                        <input
                            {...register("price", {
                                required: "Price is required!",
                            })}
                            type='number'
                            className={`border border-indigo-700 ${errors.price && "border-red-500 border-opacity-50"} outline-none text-[10px] px-2 py-1`} />
                        {
                            errors.price && <span style={{ fontSize: "7px", paddingTop: "2px", paddingBottom: "2px", width: "100%" }} className='text-red-600' >{errors.price.message}</span>
                        }
                    </div>
                    <div className='flex flex-col text-[8px] w-full mt-1'>
                        <h1 className='text-xs'>Discount Rate:</h1>
                        <input
                            {...register("discount", {
                                required: "Discount is required!",
                            })}
                            type='number'
                            className={`border border-indigo-700 ${errors.discount && " border-opacity-50"} outline-none text-[10px] px-2 py-1`} />
                        {
                            errors.discount && <span style={{ fontSize: "7px", paddingTop: "2px", paddingBottom: "2px", width: "100%" }} className='text-red-600' >{errors.discount.message}</span>
                        }
                    </div>
                    <div className='flex flex-col text-[8px] w-full mt-1'>
                        <h1 className='text-xs mb-1'>Book Image:</h1>
                        <FileUploads />
                    </div>
                    <div className='flex flex-col items-center text-sm w-full mt-5'>
                        <Button htmlType='submit' type='default' className='w-full  hover:bg-blue-100 text-indigo-700 font-semibold rounded-sm '>
                            {"Ürün Ekle"}
                        </Button>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default AdminPageLayout;