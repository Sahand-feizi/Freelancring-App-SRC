import React from 'react'
import { HiOutlineMail } from "react-icons/hi"
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function ContactUs() {
    return (
        <div className='w-full relative p-8 mt-20 rounded-2xl bg-gradient-to-tr from-primary-800 to-primary-600 flex items-center justify-between'>
            <div className='md:flex-1 space-y-2 md:space-y-4'>
                <h1 className='text-white text-2xl md:text-3xl'>راه های ارتباطی با ما</h1>
                <p className='text-sm md:text-base text-white'>ما همیشه اماده شنیدن نظرات، سوالات و پیشنهادات شما هستیم.اگر نیاز به راهنمایی دارید، یا مشکلی در استفاده از سایت دارید با ما ارتباط بگیرید</p>
                <div className='flex items-center gap-x-4 h-20 m-0'>
                    <button className='contactUsBtn hover:text-primary-900 hover:border-primary-900'>
                        <FaLinkedin />
                    </button>
                    <button className='contactUsBtn hover:text-green-300/80 hover:border-primary-300/80'>
                        <FaMicrophoneAlt />
                    </button>
                    <button className='contactUsBtn hover:text-red-600 hover:border-red-600'>
                        <HiOutlineMail />
                    </button>
                </div>
            </div>
            <div className='md:flex-1'>
                <img className='absolute hidden -bottom-10 max-w-2xl sm:-left-24 md:flex' src="./images/contact_us-removebg-preview.png" alt="contact-us" />
            </div>
        </div>
    )
}

export default ContactUs
