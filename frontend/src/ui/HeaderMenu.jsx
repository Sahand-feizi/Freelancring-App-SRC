import React from 'react'
import { HiOutlineUser } from 'react-icons/hi'
import ToggleDarkMode from './ToggleDarkMode'
import Logout from '../features/authentication/Logout'

function HeaderMenu() {
    return (
        <ul className='flex items-center gap-x-4'>
            <li className='flex'>
                <HiOutlineUser className='text-primary-900 text-xl'/>
            </li>
            <li className='flex'>
                <ToggleDarkMode />
            </li>
            <li className='flex'>
                <Logout />
            </li>
        </ul>
    )
}

export default HeaderMenu
