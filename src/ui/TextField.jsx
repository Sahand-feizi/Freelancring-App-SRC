import React from 'react'

function TextField({ labelValue, name, register, validationSchema = {}, errors, required }) {
    return (
        <div className='space-y-2'>
            <label className='font-thin text-secondary-700' htmlFor={name}>
                {labelValue}{required && <span className='text-error'>*</span>}
            </label>
            <input
                className='textField'
                type="text"
                name={name}
                id={name}
                {...register(name, validationSchema)}
            />
            {errors && errors[name] && <p className='text-error font-thin text-sm'>{errors[name].message}</p>}
        </div>
    )
}

export default TextField
