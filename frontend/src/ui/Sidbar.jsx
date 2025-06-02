import React from 'react'

function Sidbar({ children }) {
  return (
    <div className='pt-10 row-start-1 row-span-2 bg-secondary-0'>
      <h1 className='text-xl flex items-center gap-1 font-bold text-primary-900 px-2'>
        <span className='text-xl font-thin text-primary-600'>APP</span>
        <span className='hidden md:flex'>FREELANCER</span>
      </h1>
      <ul className='pr-5 space-y-3'>
        {children}
      </ul>
    </div>
  )
}

export default Sidbar
