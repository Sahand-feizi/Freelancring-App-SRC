import React from 'react'
import ProjectsTable from '../features/freelancer/projects/projectsTable'
import ProjectsHeader from '../features/freelancer/projects/ProjectsHeader'

function SubmitedProjects() {
  return (
    <div className='space-y-2'>
      <ProjectsHeader />
      <ProjectsTable />
    </div>
  )
}

export default SubmitedProjects
