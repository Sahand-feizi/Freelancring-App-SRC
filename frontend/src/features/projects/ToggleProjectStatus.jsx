import React from 'react'
import Toggle from '../../ui/Toggle'
import useChangeProjectStatus from './useChangeProjectStatus';

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

function ToggleProjectStatus({ status, id }) {
    const enabled = status == 'OPEN' ? true : false;
    const { isUpdating, changeProjectStatus } = useChangeProjectStatus()

    const handler = () => {
        changeProjectStatus({ id, data: { status: enabled ? 'CLOSED' : 'OPEN' } })
    }

    return (
        <div className='flex gap-x-2'>
            <span className={`badge ${statusStyle[status].className}`}>
                {statusStyle[status].value}
            </span>
            <Toggle enabled={enabled} onChange={handler} />
        </div>
    )
}

export default ToggleProjectStatus
