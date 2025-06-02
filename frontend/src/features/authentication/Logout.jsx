import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import useLogout from './useLogout'

function Logout() {
    const { logout } = useLogout()

    return (
        <button onClick={logout} className='text-xl text-secondary-500 hover:text-error transition-all duration-300'>
            <HiOutlineLogout />
        </button>
    )
}

export default Logout
