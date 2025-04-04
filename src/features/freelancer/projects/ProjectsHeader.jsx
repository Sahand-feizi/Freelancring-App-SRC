import React from 'react'
import FilterDropDown from '../../../ui/FilterDropDown'
import useCategories from '../../../hooks/useCategories'
import Filter from '../../../ui/Filter'

const statusOptions = [
    {
        title: 'همه',
        value: 'ALL'
    },
    {
        title: 'باز',
        value: 'OPEN'
    },
    {
        title: 'بسته',
        value: 'CLOSED'
    },
]

const sortOptions = [
    {
        title: "مرتب سازی (جدید ترین)",
        value: "latest",
    },
    {
        title: "مرتب سازی (قدیمی ترین)",
        value: "earliest",
    },
]

function ProjectsHeader() {
    const { transformedCategories } = useCategories()
    return (
        <div className='flex justify-between items-center gap-x-4'>
            <div>
                <h1 className='text-2xl font-bold text-secondary-700'>پروژه ها</h1>
            </div>
            <div className='flex-1 flex items-center gap-x-2'>
                <Filter 
                    filterField='status'
                    options={statusOptions}
                />
                <FilterDropDown
                    name='sort'
                    filterField='sort'
                    options={sortOptions}
                />
                <FilterDropDown
                    name='category'
                    filterField='category'
                    options={[
                        {
                            title: 'همه',
                            value: 'ALL'
                        },
                        ...transformedCategories
                    ]}
                />
            </div>
        </div>
    )
}

export default ProjectsHeader
