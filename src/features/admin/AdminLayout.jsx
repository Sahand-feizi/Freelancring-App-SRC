import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidbar from '../../ui/Sidbar'
import CustomNavLink from '../../ui/CustomNavLink'
import { HiCollection, HiHome, HiOutlineViewGrid, HiUser } from 'react-icons/hi'

function AdminLayout() {
    return (
        <AppLayout>
            <Sidbar>
                <CustomNavLink to='dashboard'>
                    <HiHome />
                    <span className='hidden md:flex'>داشبورد</span>
                </CustomNavLink>
                <CustomNavLink to='users'>
                    <HiUser />
                    <span className='hidden md:flex'>کاربران</span>
                </CustomNavLink>
                <CustomNavLink to='projects'>
                    <HiOutlineViewGrid />
                    <span className='hidden md:flex'>پروژه ها</span>
                </CustomNavLink>
                <CustomNavLink to='proposals'>
                    <HiCollection />
                    <span className='hidden md:flex'>درخواست ها</span>
                </CustomNavLink>
            </Sidbar>
        </AppLayout>
    )
}

export default AdminLayout
