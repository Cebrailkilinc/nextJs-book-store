import React, { useLayoutEffect } from 'react'

//COMPONENTS
import SignIn from './logins'
import SignInUser from '@/package/components/SignInUser'
import SignOutUser from '@/package/components/SignOutUser'

//REDUX
import { useAppSelector } from '@/core/hooks'
const Auth = () => {
    const { expired, token } = useAppSelector(data => data.counter)  
    return (
        <div>
            {
                expired ? <SignInUser /> : <SignOutUser />
            }
        </div>
    )
}

export default Auth