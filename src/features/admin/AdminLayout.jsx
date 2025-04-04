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
                    <span>داشبورد</span>
                </CustomNavLink>
                <CustomNavLink to='users'>
                    <HiUser />
                    <span>کاربران</span>
                </CustomNavLink>
                <CustomNavLink to='projects'>
                    <HiOutlineViewGrid />
                    <span>پروژه ها</span>
                </CustomNavLink>
                <CustomNavLink to='proposals'>
                    <HiCollection />
                    <span>درخواست ها</span>
                </CustomNavLink>
            </Sidbar>
        </AppLayout>
    )
}

export default AdminLayout
