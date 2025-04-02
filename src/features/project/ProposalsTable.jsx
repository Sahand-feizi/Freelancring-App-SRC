import React from 'react'
import Table from '../../ui/Table'
import useProject from './useProject'
import Loading from '../../ui/Loading'
import Empty from '../../ui/Empty'
import ProposalRow from './ProposalRow'

function ProposalsTable() {
    const { project, isLoading } = useProject()

    if(isLoading)
        return (
            <div className='flex justify-center'>
                <Loading width={80} height={80}/>
            </div>
        )

    if(project?.proposals == []) return <Empty resourceName='پروپوزالزی'/>


    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>فریلنسر</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {
                    project?.proposals.map((proposal, index) => (
                        <ProposalRow key={proposal._id} index={index} proposal={proposal} />
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default ProposalsTable
