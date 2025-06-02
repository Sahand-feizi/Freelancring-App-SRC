import React from 'react'

function RadioInput({labelValue, name, value, register, validationSchema, watch}) {
    return (
        <div className='flex items-center gap-x-2'>
            <label className='font-thin text-secondary-800 text-sm' htmlFor={name}>{labelValue}</label>
            <input
                type="radio"
                className='form-radio'
                name={name}
                id={name}
                value={value}
                checked={watch(name) === value}
                {...register(name, validationSchema)}
            />
        </div>
    )
}

export default RadioInput
