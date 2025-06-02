import React from 'react'
import DashboardHeader from '../../ui/DashboardHeader'
import Stats from './Stats'

function DashboardLayout() {
  return (
    <div className='space-y-2'>
      <DashboardHeader />
      <Stats />
    </div>
  )
}

export default DashboardLayout
