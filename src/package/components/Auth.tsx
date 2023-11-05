import SignInUser from '@/module/auth/components/SignInUser'
import React, { useEffect, useLayoutEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/core/hooks'
import { verifyJwtToken } from '../libs/auth';
import { $auth, $cookie } from '../utils';
import SignOutUser from '@/module/auth/components/SignOutUser';
import { userLoginUpdate } from '@/module/auth/slice/auth.slices';

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