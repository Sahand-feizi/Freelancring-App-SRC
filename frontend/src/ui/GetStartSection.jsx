import React from 'react'
import { TiTick } from "react-icons/ti";
import { NavLink } from 'react-router-dom';

function GetStartSection() {
    return (
        <div className='container flex items-center justify-center my-16 text-center'>
            <div className='space-y-4'>
                <div className='btn shadow-xl shadow-secondary-200'>
                    <div className='z-[2] lg:text-2xl text-xl font-bold text-primary-900 flex flex-row-reverse gap-x-2 justify-center items-center'>FREELANCER<span className='lg:text-xl text-lg z-[2] font-thin text-primary-600 hidden sm:flex'>APP</span></div>
                </div>
                <h1 className='text-rigth font-[950] text-secondary-900 text-[25px] sm:text-[35px] md:text-[40px] font-sans'>با فریلنسر اپ شروع کن<br /> به کار کردن</h1>
                <div className='flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:items-center sm:gap-x-4'>
                    <div className='flex items-center gap-x-2'>
                        <div className='w-[1.5rem] h-[1.5rem] bg-success rounded-full flex text-lg text-white items-center justify-center'>
                            <TiTick />
                        </div>
                        <span className='text-[.7rem] md:text-sm text-secondary-900'>کاریابی سریع</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <div className='w-[1.5rem] h-[1.5rem] bg-success rounded-full flex text-lg text-white items-center justify-center'>
                            <TiTick />
                        </div>
                        <span className='text-[.7rem] md:text-sm text-secondary-900'>ارتباط مستقیم با کارفرما</span>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <div className='w-[1.5rem] h-[1.5rem] bg-success rounded-full flex text-lg text-white items-center justify-center'>
                            <TiTick />
                        </div>
                        <span className='text-[.7rem] md:text-sm text-secondary-900'>گرفتن چند پروژه همزمان</span>
                    </div>
                </div>
                <div className='flex items-center gap-x-4 w-full justify-center'>
                    <NavLink to='auth' className='btn btn--primary'>ثبت نام</NavLink>
                    <NavLink to='auth' className='btn bg-transparent border border-secondary-500 text-secondary-500'>ورود</NavLink>
                </div>
            </div>
        </div>
    )
}

export default GetStartSection
