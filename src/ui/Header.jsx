import React from 'react'
import UserAvatar from '../features/authentication/UserAvatar'
import HeaderMenu from './HeaderMenu'
import useUser from '../features/authentication/useUser'

function Header() {
    const { isLoading } = useUser()

    return (
        <div className='bg-secondary-0 '>
            <div className={`flex gap-x-6 items-center justify-end max-w-screen-lg m-x-auto h-full ${isLoading && 'blur-sm bg-secondary-0'}`}>
                <UserAvatar />
                <HeaderMenu />
            </div>
        </div>
    )
}

export default Header
