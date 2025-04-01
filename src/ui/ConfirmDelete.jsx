import React from 'react'

function ConfirmDelete({title, onClose, confirmHandler}) {
    return (
        <div className='pt-5 space-y-2'>
            <h1 className='text-lg text-secondary-700'>{title}</h1>
            <div className='flex items-center justify-between gap-x-2 pt-2'>
                <button onClick={confirmHandler} className='btn btn--primary flex-1'>حذف</button>
                <button onClick={onClose} className='btn btn--danger flex-1'>لغو</button>
            </div>
        </div>
    )
}

export default ConfirmDelete
