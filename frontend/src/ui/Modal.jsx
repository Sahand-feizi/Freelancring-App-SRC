import React from 'react'
import { HiOutlineX } from 'react-icons/hi'

function Modal({ isOpen, title, children, onClose }) {
    if (isOpen) return (
        <div className='backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-secondary-800 bg-opacity-30 z-50'>
            <div className='max-w-sm fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto no-scrollbar'>
                <div className='flex justify-between items-center pb-2 border-b border-b-secondary-700'>
                    <span className='font-thin text-lg text-secondary-700'>{title}</span>
                    <button onClick={onClose}><HiOutlineX /></button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal
