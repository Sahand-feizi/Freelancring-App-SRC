import React, { useEffect, useState } from 'react'
import { LuText } from "react-icons/lu";
import { HiOutlineUser, HiOutlineX } from "react-icons/hi";
import Logout from '../features/authentication/Logout'
import ToggleDarkMode from './ToggleDarkMode'
import { useNavigate } from 'react-router-dom';

function HomePageHeader() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const [small, setSmall] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 120)
            );
        }
    }, []);

    return (
        <div className={`w-full sticky top-0 z-10 ${small ? 'bg-secondary-0' : ''}`}>
            <div className={'flex md:items-center justify-between px-12 mx-auto lg:container h-20 py-3 md:py-5'}>
                <div className='z-[2] flex items-center'>
                    <div className='z-[2] lg:text-2xl text-xl font-bold text-primary-900 flex flex-row-reverse gap-x-2 justify-center items-center'>FREELANCER<span className='lg:text-xl text-lg z-[2] font-thin text-primary-600 hidden sm:flex'>APP</span></div>
                </div>
                <div className='flex md:hidden items-center gap-x-2'>
                    <div className='flex items-center gap-x-3'>
                        <li className='flex'>
                            <HiOutlineUser className='text-secondary-500 cursor-pointer text-xl hover:text-primary-800' />
                        </li>
                        <li className='flex'>
                            <ToggleDarkMode />
                        </li>
                        <li className='flex'>
                            <Logout />
                        </li>
                    </div>
                    <button onClick={() => setShow(true)} className='h-3 flex items-center text-2xl text-secondary-900'>
                        <LuText />
                    </button>
                </div>
                <div className={`flex flex-col items-center md:gap-x-12 z-[2] absolute duration-200 ${show ? 'left-4' : 'left-[-240px]'} p-4 h-screen rounded-xl space-y-3 bg-secondary-100 md:flex-row md:bg-transparent md:h-0 md:relative md:left-0`}>
                    <button onClick={() => setShow(false)} className='md:hidden text-2xl text-secondary-900'>
                        <HiOutlineX />
                    </button>
                    <div className='flex flex-col space-y-4 md:items-center md:gap-x-3 z-[2] md:justify-between md:w-full md:flex-row md:space-y-0'>
                        <a href='#ourProcessWork' className='headerNavLink'>
                            <span className='gap-x-2 px-4'>عملکرد</span>
                        </a>
                        <a href='#aboutUs' className='headerNavLink'>
                            <span className='gap-x-2 px-4'>درباره ما</span>
                        </a>
                        <a href='#features' className='headerNavLink'>
                            <span className='gap-x-2 px-4'>ویژگی ها</span>
                        </a>
                        <a href='#home' className='headerNavLink text-primary-900 z-[2] after:w-full bg-primary-900/20 hover:bg-primary-900/20 md:bg-transparent md:hover:bg-transparent'>
                            <span className='gap-x-2 px-4'>خانه</span>
                        </a>
                    </div>
                    <div className='flex flex-col-reverse gap-y-4 md:items-center md:gap-x-7 md:flex-row'>
                        <button className='text-secondary-800 font-bold z-0 text-base md:w-16' onClick={() => navigate('/auth')}>ثبت نام</button>
                        <button className='btn btn--primary rounded-full z-[2] px-8' onClick={() => navigate('/auth')}>ورود</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageHeader
