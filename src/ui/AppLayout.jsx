import React from 'react'
import Header from './Header'
import Sidbar from './Sidbar'
import { Outlet } from 'react-router-dom'

function AppLayout({children}) {
    return (
        <div className='grid h-screen grid-cols-[14rem_1fr] grid-rows-[2.5rem_1fr]'>
            {children}
            <Header />
            <div className='bg-secondary-100'>
                <div className='max-w-screen-lg pt-5 h-4 m-auto px-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AppLayout
