import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

function ToggleDarkMode() {
    const { toggleDarkMode, isDarkMode } = useDarkMode()

    return (
        <button onClick={toggleDarkMode}>
            {
                isDarkMode ? (
                    <HiOutlineSun className='text-xl text-primary-900'/>
                ) : (
                    <HiOutlineMoon className='text-xl text-primary-900'/>
                )
            }
        </button>
    )
}

export default ToggleDarkMode
