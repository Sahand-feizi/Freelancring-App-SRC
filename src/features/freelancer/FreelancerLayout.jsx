import React from 'react'
import AppLayout from '../../ui/AppLayout'
import Sidbar from '../../ui/Sidbar'
import CustomNavLink from '../../ui/CustomNavLink'
import { HiCollection, HiHome } from 'react-icons/hi'

function FreelancerLayout() {
    return (
        <AppLayout>
            <Sidbar>
                <CustomNavLink to='dashboard'>
                    <HiHome />
                    <span>داشبورد</span>
                </CustomNavLink>
                <CustomNavLink to='projects'>
                    <HiCollection />
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

export default FreelancerLayout
