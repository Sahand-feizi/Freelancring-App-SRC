import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'

function FilterDropDown({ name, options, filterField }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const value = searchParams.get(filterField) || options.at(0)?.value

    const handleChange = (e) => {
        searchParams.set(filterField, e.target.value)
        setSearchParams(searchParams)
    }

    return <Select name={name} value={value} options={options} onChange={handleChange} />
}

export default FilterDropDown
