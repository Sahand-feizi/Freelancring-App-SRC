import React from 'react'

function RHFselect({ register, validationSchema, required, errors, labelValue, name, options }) {
    return (
        <div className='space-y-2'>
            <label className='font-thin text-secondary-800 block' htmlFor={name}>{labelValue}{required && <span className='text-error'>*</span>}</label>
            <select
                name={name}
                id={name}
                {...register(name, validationSchema)}
                className='textField text-secondary-800'
            >
                {
                    options?.map(({value, title}) => (
                        <option className='font-thin text-secondary-800 bg-secondary-0' value={value}>{title}</option>
                    ))
                }
            </select>
            {errors && errors[name] && <p className='text-error font-thin text-sm'>{errors[name].message}</p>}
        </div>
    )
}

export default RHFselect
