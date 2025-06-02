import React from 'react'

const colors = {
    purple: 'bg-purple-300 text-purple-600/80',
    green: 'bg-green-300 text-green-600/80',
    red: 'bg-red-300 text-red-600/80',
    primary: 'bg-primary-600 text-primary-900',
    secondary: 'bg-gray-300 text-gray-600/80',
    orange: 'bg-orange-300 text-orange-600/80'
}

function FeatureItem({ icon, title, description, color }) {
    return (
        <div className='p-3 bg-secondary-0 rounded-xl space-y-2  text-right shadow-xl shadow-primary-900/80'>
            <div className={`sm:w-10 sm:h-10 h-8 w-8 flex items-center justify-center rounded-xl ${colors[color]} sm:text-2xl text-xl`}>
                {icon}
            </div>
            <h3 className='text-secondary-900 font-bold text-base xl:text-lg'>{title}</h3>
            <p className='lg:text-sm text-xs text-secondary-600 font-thin'>{description}</p>
        </div>
    )
}

export default FeatureItem
