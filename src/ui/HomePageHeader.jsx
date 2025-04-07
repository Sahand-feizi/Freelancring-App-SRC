import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";
import { MdContacts } from "react-icons/md";

function HomePageHeader() {
    return (
        <div className='flex items-center justify-between py-5'>
            <div>
                <h1 className='text-2xl font-bold text-primary-900 px-2'>FREELANCER <span className='text-xl font-thin text-primary-600'>APP</span></h1>
            </div>
            <div className='flex items-center gap-x-12'>
                <div className='flex items-center gap-x-3'>
                    <NavLink to='/' className={({ isActive }) => {
                        return isActive ? 'headerNavLink text-primary-900 after:w-full' : 'headerNavLink'
                    }}>
                        <span className='gap-x-2 px-4'>خانه</span>
                    </NavLink>
                    <NavLink to='/abuteUs' className={({ isActive }) => {
                        return isActive ? 'headerNavLink text-primary-900' : 'headerNavLink'
                    }}>
                        <span className='gap-x-2 px-4'>درباره ما</span>
                    </NavLink>
                    <NavLink to='/callToUs' className={({ isActive }) => {
                        return isActive ? 'headerNavLink text-primary-900' : 'headerNavLink'
                    }}>
                        <span className='gap-x-2 px-4'>تماس با ما</span>
                    </NavLink>
                </div>
                <div className='flex items-center gap-x-7'>
                    <button className='text-secondary-800 font-bold text-base'>ثبت نام</button>
                    <button className='btn btn--primary rounded-full px-8'>ورود</button>
                </div>
            </div>
        </div>
    )
}

export default HomePageHeader
