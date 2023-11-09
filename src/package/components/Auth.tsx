
import React, { useEffect, useLayoutEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/core/hooks'
import { verifyJwtToken } from '../libs/auth';
import { $auth, $cookie } from '../utils';
import dynamic from 'next/dynamic'
import { userLoginUpdate } from '@/module/auth/slice/auth.slices';

const SignOutUser  = dynamic(() => import('@/module/auth/components/SignOutUser'))
const SignInUser = dynamic(() => import('@/module/auth/components/SignInUser'))

const Auth = () => {
    const { token, loginSuccess, expired } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const tokenFromCookie = $auth.getTokenFromCookie($cookie.get("bookstore.auth.token")) ?? '';
    const tokenVerified = verifyJwtToken(tokenFromCookie)


    useEffect(() => {
        if (tokenVerified) {
            dispatch(userLoginUpdate(true))
        }
    }, [tokenVerified])



    return (
        <div>
            {expired ? <SignInUser /> : <SignOutUser />}
        </div>
    )
}

export default Auth