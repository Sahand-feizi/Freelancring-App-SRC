import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import Modal from '../../ui/Modal'
import CreateAndEditProjectsForm from './CreateAndEditProjectsForm'

function ProjectsHeader() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-medium text-secondary-700'>لیست پروژه های شما</h1>
            <>
                <button onClick={() => setIsOpen(true)} className='btn btn--primary flex items-center gap-x-2'>
                    <HiPlus className='text-lg' />
                    <span>اضافه کردن پروژه جدید</span>
                </button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title='ایجاد پروژه جدید'
                >
                    <CreateAndEditProjectsForm onClose={() => setIsOpen(false)}/>
                </Modal>
            </>
        </div>
    )
}

export default ProjectsHeader
