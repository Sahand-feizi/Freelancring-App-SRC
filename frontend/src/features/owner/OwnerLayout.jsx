import React from 'react'
import AppLayout from '../../ui/AppLayout'
import CustomNavLink from '../../ui/CustomNavLink'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Sidbar from '../../ui/Sidbar';
import { HiOutlineViewGrid } from 'react-icons/hi';

function OwnerLayout() {
    return (
        <AppLayout>
            <Sidbar>
                <CustomNavLink to='dashboard'>
                   <MdOutlineSpaceDashboard />
                   <span className='hidden md:flex'>داشبورد</span>
                </CustomNavLink>
                <CustomNavLink to='projects'>
                    <HiOutlineViewGrid />
                    <span className='hidden md:flex'>پروژه ها</span>
                </CustomNavLink>
            </Sidbar>
        </AppLayout>
    )
}

export default OwnerLayout
