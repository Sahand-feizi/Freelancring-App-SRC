import React, { useState } from 'react'
import Table from '../../../ui/Table'
import truncateString from '../../../utils/truncateString'
import { toPersianNumbersWithComma } from '../../../utils/toPersionNumbers'
import toLocaleDateShort from '../../../utils/toLocaleDateShort'
import { MdAssignmentAdd } from 'react-icons/md'
import Modal from '../../../ui/Modal'
import CreateProposalForm from '../../proposals/CreateProposalForm'

const statusStyle = {
    OPEN: {
        className: 'badge--success',
        value: 'باز'
    },
    CLOSED: {
        className: 'badge--error',
        value: 'بسته'
    }
}

function ProjectsTableRow({ project, index }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateString(project.title, 15)}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLocaleDateShort(project.deadline)}</td>
            <td>
                <span className={`badge ${statusStyle[project.status].className}`}>
                    {statusStyle[project.status].value}
                </span>
            </td>
            <td>
                <Modal
                    title='ارسال درخواست'
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <CreateProposalForm projectId={project._id} onClose={() => setIsOpen(false)}/>
                </Modal>
                <button onClick={() => setIsOpen(true)}>
                    <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
                </button>
            </td>
        </Table.Row>
    )
}

export default ProjectsTableRow
