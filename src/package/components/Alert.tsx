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
const AlertBox = () => {

    const dispatch = useAppDispatch();
    const [showAlert, setShowAlert] = useState(false);
    const { expired, token, loginSuccess, message, infoType } = useAppSelector(state => state.auth)


    useEffect(() => {
        const timeout: any = setTimeout(() => {
            dispatch(alertControl(false))
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };

    }, [loginSuccess]);

    return (
        <div className='absolute  top-20 left-20 z-40 rounded-3xl' >
            {
                loginSuccess &&
                <Alert rounded={"xl"} fontSize={"xs"} status={infoType} variant='solid'>
                    <AlertIcon />
                    {message}
                </Alert>
            }
        </div>
    )
}

export default AlertBox;

