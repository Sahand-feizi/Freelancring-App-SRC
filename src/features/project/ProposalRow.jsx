import React, { useState } from 'react'
import Table from '../../ui/Table'
import truncateString from '../../utils/truncateString'
import { toPersianNumbers, toPersianNumbersWithComma } from '../../utils/toPersionNumbers';
import Modal from '../../ui/Modal';
import ChangeProposalStatus from './ChangeProposalStatus';

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
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{proposal.user.name}</td>
            <td>{truncateString(proposal.description, 30)}</td>
            <td>{toPersianNumbers(proposal.duration)} روز</td>
            <td>{toPersianNumbersWithComma(proposal.price)}</td>
            <td>
                <span className={`badge ${statusStyle[proposal.status].className}`}>{statusStyle[proposal.status].title}</span>
            </td>
            <td>
                <button onClick={() => setIsOpen(true)} className='text-secondary-800 font-bold'>تغییر وضعیت</button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title='تغییر وضعیت'
                >
                    <ChangeProposalStatus
                        options={statusStyle}
                        onClose={() => setIsOpen(false)}
                        proposalId={proposal._id}
                    />
                </Modal>
            </td>
        </Table.Row>
    )
}

export default ProposalRow
