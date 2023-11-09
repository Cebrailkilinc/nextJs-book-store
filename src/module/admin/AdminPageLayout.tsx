"use client"
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthLoginForm } from '@/module/auth/types/types';
import { AddBook } from './types';
import { Button, Tabs, TabList, Tab, TabPanel, TabPanels, Spinner } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useAppDispatch } from '@/core/hooks';
import Loading from '@/package/components/Loading';

const AddProduct = dynamic(() => import('./components/AddProduct'),
    {
        loading: () => <Loading/>
    }
)
const AllBooks = dynamic(() => import('./components/AllBooks'),
    {
        loading: () => <Loading/>,
    }
)
const Customer = dynamic(() => import('./components/Customer'),
    {
        loading: () => <Loading/>,
    }
)

const AdminPageLayout = () => {
    const [activeMenuItem, setActiveMenuItem] = useState(''); // Varsayılan olarak hiçbiri seçili değil
    const dispatch = useAppDispatch();

    const handleMenuItemClick = (item: string) => {
        setActiveMenuItem(item);
    };

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
        <div className='gap-5 max-w-5xl mx-auto pt-20' >
            <Tabs isLazy>
                <TabList>
                    <Tab>Add Book</Tab>
                    <Tab>All Books</Tab>
                    <Tab>Customer</Tab>
                </TabList>
                <TabPanels>
                    {/* initially mounted */}
                    <TabPanel>
                        <AddProduct />
                    </TabPanel>
                    <TabPanel>
                        <AllBooks />
                    </TabPanel>
                    <TabPanel>
                        <Customer />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>

    )
}

export default AdminPageLayout;