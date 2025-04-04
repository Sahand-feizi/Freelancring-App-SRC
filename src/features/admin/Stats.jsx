import React from 'react'
import Stat from '../../ui/stat'
import { HiCollection, HiOutlineViewGrid, HiUser } from 'react-icons/hi'
import useProposals from '../proposals/useProposals'
import useProjects from '../../hooks/useProjects'
import useUsers from './useUsers'
import Loading from '../../ui/Loading'

function Stats() {
    const {isLoading: isLoading1, proposals} = useProposals()
    const {isLoading: isLoading2, projects} = useProjects()
    const {isLoading: isLoading3, users} = useUsers()

    const numOfUsers = users.length;
    const numOfProjects = users.length;
    const numOfProposals = proposals.length;

    if(isLoading1 || isLoading2 || isLoading3) return <Loading width={80} height={80}/>

    return (
        <div className='grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-2'>
            <Stat
                color="yellow"
                title="کاربران"
                value={numOfUsers}
                icon={<HiUser className="w-20 h-20" />}
            />
            <Stat
                color="primary"
                title="درخواست ها"
                value={numOfProposals}
                icon={<HiOutlineViewGrid className="w-20 h-20" />}
            />
            <Stat
                color="green"
                title="پروژه ها"
                value={numOfProjects}
                icon={<HiCollection className="w-20 h-20" />}
            />
        </div>
    )
}

export default Stats
