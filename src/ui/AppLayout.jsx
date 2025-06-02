import React from 'react'
import Header from './Header'
import Sidbar from './Sidbar'
import { Outlet } from 'react-router-dom'

function AppLayout({ children }) {
    return (
        <div className='grid h-screen md:grid-cols-[14rem_auto] grid-cols-[5rem_1fr] grid-rows-[2.5rem_1fr]'>
            {children}
            <Header />
            <div className="bg-secondary-100 p-8 overflow-y-auto">
                <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AppLayout
