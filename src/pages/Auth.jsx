import React from 'react'
import AuthContainer from '../features/authentication/AuthContainer'

function Auth() {
  return (
    <div className='pt-10 w-full sm:max-w-sm m-auto px-1 h-[calc(100vh-1rem)] overflow-y-auto'>
        <AuthContainer />
    </div>
  )
}

export default Auth
