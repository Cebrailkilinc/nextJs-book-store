"use client"
import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/core/hooks';
import { alertControl } from '@/module/auth/slice/auth.slices';
const AlertBox = () => {

    const dispatch = useAppDispatch();
    const [showAlert, setShowAlert] = useState(false);
    const { expired, token, loginSuccess,message } = useAppSelector(state => state.auth)

    
    useEffect(() => {
        const timeout: any = setTimeout(() => {
            dispatch(alertControl(false))
        }, 3500);

        return () => {
            clearTimeout(timeout);
        };

    }, [loginSuccess]);

    return (
        <div className='absolute  top-20 left-20  max-w-[100px]' >
            {
                loginSuccess && <span style={{ fontSize: "10px", width: "200px" }} >{message}</span>
            }
        </div>
    )
}

export default AlertBox;