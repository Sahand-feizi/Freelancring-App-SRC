import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter({ options, filterField }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const filterValue = searchParams.get(filterField) || options.at(0)?.value

    const handleChange = (value) => {
        searchParams.set(filterField, value)
        setSearchParams(searchParams)
    }

    return (
        <div className='bg-secondary-0 p-0.5 flex items-center gap-x-2 rounded-xl'>
            {
                options.map(({title, value}) => {
                    const isActive = value == filterValue

                    return (
                        <button onClick={() => handleChange(value)} className={`py-1.5 px-2.5 font-thin rounded-md transition-all duration-200  ${isActive ? 'bg-primary-900 text-secondary-0' : 'bg-transparent text-secondary-700 hover:bg-primary-200 hover:text-secondary-0'}`}>
                            {title}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Filter
