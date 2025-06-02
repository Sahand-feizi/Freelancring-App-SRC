import React from 'react'

function Select({ options, name, value, onChange }) {
    return (
        <select
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            className='textField bg-secondary-0'
        >
            {
                options.map(({ title, value }) => (
                    <option key={value} className='bg-secondary-0 text-secondary-700 font-thin' value={value}>{title}</option>
                ))
            }
        </select>
    )
}

export default Select
