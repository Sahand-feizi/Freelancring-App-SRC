import React from 'react'
import ProposalsTable from '../features/proposals/ProposalsTable'

function Proposals() {
  return (
    <div className='space-y-2'>
      <div>
        <h1 className='text-secondary-700 text-2xl'>لیست درخواست های شما</h1>
      </div>
      <ProposalsTable />
    </div>
  )
}

export default Proposals
