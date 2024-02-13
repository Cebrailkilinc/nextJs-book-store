"use client"
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthLoginForm } from '@/module/auth/types/types';
import { AddBook } from '@/module/admin/types/index';
import { Button, Input } from '@chakra-ui/react';
import { useAppDispatch } from '@/core/hooks';

const AddProduct = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<AddBook>()

    const onSubmit: SubmitHandler<AddBook> = (data) => {
    
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2' >
                <div className='flex flex-col text-[8px] w-full mt-1' >
                    <h1 className='text-xs' >Book Name:</h1>
                    <Input
                        {...register("name", {
                            required: "Book name is required!",
                        })}
                        type='text'
                        className={`border border-indigo-700 ${errors.name && "border-red-500 border-opacity-50"} outline-none text-[10px] px-2 py-1`} />
                    {
                        errors.name && <span style={{ fontSize: "7px", paddingTop: "2px", paddingBottom: "2px", width: "100%" }} className='text-red-600' >{errors.name.message}</span>
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
                    <h1 className='text-xs'>Discount Rate:</h1>
                    <input
                        {...register("isInStock", {
                            required: "isInStock is required!",
                        })}
                        type='checkbox'
                        className={`border border-indigo-700 ${errors.isInStock && " border-opacity-50"} outline-none text-[10px] px-2 py-1`} />
                    {
                        errors.isInStock && <span style={{ fontSize: "7px", paddingTop: "2px", paddingBottom: "2px", width: "100%" }} className='text-red-600' >{errors.isInStock.message}</span>
                    }
                </div>
                <div className='flex flex-col text-[8px] w-full mt-1'>
                    <h1 className='text-xs mb-1'>Book Image:</h1>

                </div>
                <div className='flex flex-col items-center text-sm w-full mt-5'>
                    <Button type='submit' width={"100%"} colorScheme='blue'>Ürün Ekle</Button>
                </div>
            </form>
        </div >


    )
}

export default AddProduct