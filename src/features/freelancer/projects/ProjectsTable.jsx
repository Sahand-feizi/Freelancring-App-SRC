import React from 'react'
import Table from '../../../ui/Table'
import useProjects from '../../../hooks/useProjects'
import Loading from '../../../ui/Loading'
import Empty from '../../../ui/Empty'
import ProjectsTableRow from './ProjectsTableRow'

function ProjectsTable() {
    const { isLoading, projects } = useProjects()
    console.log(projects);
    

    if(isLoading) return <Loading width={80} hight={80}/>

    if(!projects) return <Empty resourceName='پروژه ایی'/>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان پروژه</th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {
                    projects?.map((project, index) => (
                        <ProjectsTableRow index={index} project={project} key={project._id} />
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default ProjectsTable
