import React from 'react'
import useUser from './useUser'

function UserAvatar() {
    const { user } = useUser()

    return (
        <div className='flex gap-x-2 items-center'>
            <img src="/user.jpg" alt="user" className='h-8 w-8 rounded-full object-cover'/>
            <span className='font-thin text-secondary-800 text-md'>{user?.name}</span>
        </div>
    )
}

export default UserAvatar
