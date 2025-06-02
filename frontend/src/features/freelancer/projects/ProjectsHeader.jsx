import React, { useState } from 'react'
import FilterDropDown from '../../../ui/FilterDropDown'
import useCategories from '../../../hooks/useCategories'
import Filter from '../../../ui/Filter'
import { TiArrowSortedDown } from "react-icons/ti";

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
    const [show, setShow] = useState(false)

    return (
        <div className='flex justify-between items-center px-2 gap-x-4 relative'>
            <div>
                <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-secondary-700'>پروژه ها</h1>
            </div>
            <button onClick={() => setShow(prev => !prev)} className='lg:hidden sm:w-52 w-44 flex text-secondary-900 font-thin items-center justify-between rounded-xl bg-secondary-0 p-3'>
                <span>مرتب سازی</span>
                <TiArrowSortedDown className={`transition-all duration-300 ${show ? 'rotate-180' : 'rotate-0'}`}/>
            </button>
            <div className={`hidden ${show && '!flex'} bg-secondary-0 p-4 sm:w-52 w-44 flex-col gap-y-4 items-center rounded-xl left-0 absolute top-[3.5rem] lg:flex lg:flex-1 lg:flex-row lg:relative lg:top-0 lg:items-center lg:gap-x-2 ml-2`}>
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
