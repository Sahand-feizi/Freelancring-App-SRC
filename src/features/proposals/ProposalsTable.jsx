import React from 'react'
import Table from '../../ui/Table'
import useProposals from './useProposals'
import Loading from '../../ui/Loading'
import Empty from '../../ui/Empty'
import ProposalRow from './ProposalRow'

function ProposalsTable() {
    const {proposals, isLoading} = useProposals()

    if(isLoading) return <Loading width={80} height={80}/>

    if(!proposals) return <Empty resourceName='درخواستی'/>

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه</th>
                <th>وضعیت</th>
            </Table.Header>
            <Table.Body>
                {
                    proposals.map((proposal, index) => (
                        <ProposalRow index={index} proposal={proposal}/>
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default ProposalsTable
