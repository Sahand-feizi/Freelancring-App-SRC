import React from 'react'
import Table from '../../ui/Table'
import truncateString from '../../utils/truncateString'
import { toPersianNumbers, toPersianNumbersWithComma } from '../../utils/toPersionNumbers'

const statusStyle = [
    {
        className: 'badge--error',
        title: 'رد شده',
        value: 0
    },
    {
        className: 'badge--secondary',
        title: 'در انتظار تایید',
        value: 1
    },
    {
        className: 'badge--success',
        title: 'تایید شده',
        value: 2
    }
]

function ProposalRow({ index, proposal }) {
    console.log(proposal);

    return (
        <Table.Row>
            <th>{index + 1}</th>
            <th>{truncateString(proposal.description, 30)}</th>
            <th>{toPersianNumbers(proposal.duration)} روز</th>
            <th>{toPersianNumbersWithComma(proposal.price)}</th>
            <th>
                <span className={`badge ${statusStyle[proposal.status].className}`}>
                    {statusStyle[proposal.status].title}
                </span>
            </th>
        </Table.Row>
    )
}

export default ProposalRow
