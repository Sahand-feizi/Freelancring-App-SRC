import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function Footer() {
    return (
        <div className='container border-t md:max-w-screen-lg border-t-secondary-400 py-4 flex items-center justify-between'>
            <div className='z-[2] lg:text-2xl text-[1.1rem] font-bold text-primary-900 flex flex-row-reverse gap-x-2 justify-center items-center'>FREELANCER<span className='lg:text-xl text-lg z-[2] font-thin text-primary-600 hidden sm:flex'>APP</span></div>
            <h3 className="text-secondary-900 text-sm md:text-lg">
                Sahand feizi
            </h3>
            <div className="flex items-center gap-x-4">
                <Link to='https://www.linkedin.com/in/sahand-feizi-22464a340/' replace className='text-lg text-secondary-700 hover:text-primary-900'>
                    <FaLinkedin />
                </Link>
                <Link to='https://github.com/Sahand-feizi' replace className='text-lg text-secondary-700 hover:text-secondary-900'>
                    <FaGithub />
                </Link>
            </div>
        </div>
    )
}

export default Footer
