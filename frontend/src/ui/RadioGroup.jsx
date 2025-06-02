import React from 'react'
import RadioInput from './RadioInput'

function RadioGroup({ register, options, errors, name, validationSchema, watch }) {
    return (
        <div className='space-y-2'>
            <div className='flex items-center gap-x-2'>
                {
                    options.map(({ label, value }) => (
                        <RadioInput
                            key={value}
                            labelValue={label}
                            value={value}
                            name={name}
                            register={register}
                            validationSchema={validationSchema}
                            watch={watch}
                        />
                    ))
                }
            </div>
            {errors && errors[name] && <span className='text-error text-sm font-thin'>{errors[name].message}</span>}
        </div>
    )
}

export default RadioGroup
