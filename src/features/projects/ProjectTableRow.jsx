import React, { useState } from 'react'
import Table from '../../ui/Table'
import truncateString from '../../utils/truncateString'
import { toPersianNumbersWithComma } from '../../utils/toPersionNumbers';
import toLocaleDateShort from '../../utils/toLocaleDateShort';
import { HiEye } from 'react-icons/hi';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete';
import useRemoveProject from './useRemoveProjects';
import CreateAndEditProjectsForm from './CreateAndEditProjectsForm';
import { NavLink, useNavigate } from 'react-router-dom';

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

function ProjectTableRow({ project, index }) {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const { isDeleting, removeProject } = useRemoveProject()

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{truncateString(project.title, 12)}</td>
            <td>{project.category.title}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{toLocaleDateShort(project.deadline)}</td>
            <td>
                <div>
                    {
                        project.tags.map(tag => (
                            <span className='badge badge--secondary'>{tag}</span>
                        ))
                    }
                </div>
            </td>
            <td>
                <div className="flex justify-center items-center">
                    {project?.freelancer?.name || '-'}
                </div>
            </td>
            <td>
                <span className={`badge ${statusStyle[project.status].className}`}>
                    {statusStyle[project.status].value}
                </span>
            </td>
            <td>
                <div className='flex gap-x-2'>
                    <>
                        <button onClick={() => setIsEditOpen(true)} className='text-xl text-primary-900'><FaRegEdit /></button>
                        <Modal
                            isOpen={isEditOpen}
                            onClose={() => setIsEditOpen(false)}
                            title='ادیت پروژه'
                        >
                            <CreateAndEditProjectsForm
                                onClose={() => setIsEditOpen(false)}
                                project={project}
                            />
                        </Modal>
                    </>
                    <>
                        <button onClick={() => setIsDeleteOpen(true)} className='text-xl text-error'><MdDelete /></button>
                        <Modal
                            isOpen={isDeleteOpen}
                            onClose={() => setIsDeleteOpen(false)}
                            title='حذف پروژه'
                        >
                            <ConfirmDelete
                                title={`ایا از حذف ${project.title} مطما هستید`}
                                onClose={() => setIsDeleteOpen(false)}
                                isDeleting={isDeleting}
                                confirmHandler={() => removeProject(project._id, {
                                    onSuccess: () => {
                                        setIsDeleteOpen(false)
                                    }
                                })}
                            />
                        </Modal>
                    </>
                </div>
            </td>
            <td>
                <NavLink to={project._id} className='text-xl text-primary-900 flex justify-center items-center w-full'><HiEye /></NavLink>
            </td>
        </Table.Row>
    )
}

export default ProjectTableRow
