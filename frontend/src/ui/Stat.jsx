import React from 'react'
import { HiUser } from 'react-icons/hi'
import { toPersianNumbers } from '../utils/toPersionNumbers'

const colors = {
    yellow: 'bg-yellow-200 text-yellow-500',
    green: 'bg-green-200 text-green-500',
    primary: 'bg-primary-200 text-primary-500'
}

function Stat({icon, title, value, color}) {
    return (
        <div className='bg-secondary-0 py-2 px-3 rounded-xl gap-x-4 grid grid-cols-[4rem_1fr] grid-rows-[2rem_2rem] lg:grid-cols-[5rem_1fr] lg:grid-rows-[2.5rem_2.5rem]'>
            <div className={`row-span-2 ${colors[color]} rounded-full flex items-center justify-center`}>
                {icon}
            </div>
            <p className='text-secondary-600 text-[1rem] lg:text-lg'>{title}</p>
            <h1 className='text-secondary-800 text-xl md:text-2xl'>{toPersianNumbers(value)}</h1>
        </div>
    )
}

export default Stat
