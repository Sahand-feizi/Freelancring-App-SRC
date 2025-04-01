import React from 'react'
import Table from '../../ui/Table'
import useOwnerProjects from './useOwnerProjects'
import Loading from '../../ui/Loading'
import ProjectTableRow from './ProjectTableRow'

function ProjectsTable() {
    const { projects, isLoading } = useOwnerProjects()

    if (isLoading)
        <div className='w-full flex justify-center'>
            <Loading width={80} height={80} />
        </div>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان پروژه</th>
                <th>دسته بندی</th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>تگ ها</th>
                <th>فریلنسر</th>
                <th>وضعیت</th>
                <th>عملیات</th>
                <th>درخواست ها</th>
            </Table.Header>
            <Table.Body>
                {
                    projects?.map((project, index) => (
                        <ProjectTableRow project={project} key={project._id} index={index}/>
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default ProjectsTable
