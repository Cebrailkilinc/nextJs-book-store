import React from 'react'
import dynamic from 'next/dynamic'

const RegisterLayout= dynamic(() => import('@/module/auth/RegisterLayout'))

const Register = () => {
    return (
        <section>
            <RegisterLayout/>
        </section>
    )
}

export default Register;

