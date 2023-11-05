"use client"
import React, { useEffect, useState } from 'react'
import { Alert } from 'antd';
import { useAppSelector, useAppDispatch } from '@/core/hooks';
import { closeAlert } from '@/module/auth/slice/auth.slices';
const AlertBox = () => {

    const dispatch = useAppDispatch();
    const [showAlert, setShowAlert] = useState(false);
    const {expired,token,loginSuccess} = useAppSelector(state => state.auth)
    useEffect(() => {
        if (showAlert) {
            const timeout:any = setTimeout(() => {
                dispatch(closeAlert(false))
            }, 5000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [loginSuccess]);
    return (
        <div className='absolute  top-20 left-20  max-w-[100px]' >
            {
             loginSuccess && <Alert style={{fontSize:"10px", width:"200px"}} message="Warning" type="warning" showIcon closable />
            }
        </div>
    )
}

export default AlertBox;