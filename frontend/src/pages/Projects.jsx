import React from 'react'
import ProjectsHeader from '../features/projects/ProjectsHeader'
import ProjectsTable from '../features/projects/ProjectsTable'

function Projects() {
    return (
        <div className='space-y-4'>
            <ProjectsHeader />
            <ProjectsTable />
        </div>
    )
}

export default Projects
