import React from 'react'
import { NavLink } from 'react-router-dom'

function CustomNavLink({children, to}) {
    return (
        <li className='w-full'>
            <NavLink to={to} className={({isActive}) =>{
                return isActive ? `navLink after:content-[''] before:content-[''] bg-secondary-100 text-primary-900` : 'navLink'
            }}>
                {children}
            </NavLink>
        </li>
    )
}

export default CustomNavLink
