"use client"
import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/core/hooks';
import { alertControl } from '@/module/auth/slice/auth.slices';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import { useGlobalContext } from '@/app/context/AlertContext';
const AlertBox = () => {

    const
        {
            openAlert,
            alertMessage,
            alertType,
            setOpenAlert
        } = useGlobalContext();

    useEffect(() => {
        const timeout: any = setTimeout(() => {
            setOpenAlert(false)
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };

    }, []);

    return (
        <div className='absolute  top-20 left-20 z-40 rounded-3xl' >
            {
                openAlert &&
                <Alert rounded={"xl"} fontSize={"xs"} status={alertType} variant='solid'>
                    <AlertIcon />
                    {alertMessage}
                </Alert>
            }
        </div>
    )
}

export default AlertBox;

