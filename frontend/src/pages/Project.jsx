import React from 'react'
import ProjectHeader from '../features/project/ProjectHeader'
import ProposalsTable from '../features/project/ProposalsTable'

function Project() {
    return (
        <div className='space-y-4'>
            <ProjectHeader />
            <ProposalsTable />
        </div>
    )
}

export default Project
