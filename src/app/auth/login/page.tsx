import React from 'react'
import dynamic from 'next/dynamic'
 
// Client Components:
const LoginLayout = dynamic(() => import('@/module/auth/LoginLayout'))


const Login = () => {
  return (
    <div>
      <LoginLayout/>
    </div>
  )
}

export default Login