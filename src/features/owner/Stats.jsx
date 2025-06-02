import React from 'react'
import Stat from '../../ui/Stat'
import useOwnerProjects from '../projects/useOwnerProjects'
import Loading from '../../ui/Loading'
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi'

function Stats() {
  const {isLoading, projects} = useOwnerProjects()

  console.log(projects);
  

  const numOfProjects = projects?.length;
  const numOfAccussProjects = projects?.filter(project => project.status == 'CLOSED').length
  const numOfProposals = projects?.reduce((acc, curr) => acc + curr.proposals.length, 0);

  if(isLoading) return <Loading width={80} height={80}/>

  return (
    <div className='grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-2'>
      <Stat 
        icon={<HiOutlineViewGrid className="w-10 md:w-20 h-10 md:h-20" />}
        title='پروژه ها'
        value={numOfProjects}
        color='yellow'
      />
      <Stat 
        icon={<HiCurrencyDollar className="w-10 md:w-20 h-10 md:h-20" />}
        title='پروژه های واگذار شده'
        value={numOfAccussProjects}
        color='green'
      />
      <Stat 
        icon={<HiCollection className="w-10 md:w-20 h-10 md:h-20" />}
        title='درخواست ها'
        value={numOfProposals}
        color='primary'
      />
    </div>
  )
}

export default Stats
