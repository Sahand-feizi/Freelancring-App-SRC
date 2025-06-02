import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidbar from '../../ui/Sidbar'
import CustomNavLink from '../../ui/CustomNavLink'
import { HiCollection, HiHome } from 'react-icons/hi'
import { AiFillProject } from "react-icons/ai";

function FreelancerLayout() {
    return (
        <AppLayout>
            <Sidbar>
                <CustomNavLink to='dashboard'>
                    <HiHome />
                    <span className='hidden md:flex'>داشبورد</span>
                </CustomNavLink>
                <CustomNavLink to='projects'>
                    <AiFillProject />
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

export default FreelancerLayout
