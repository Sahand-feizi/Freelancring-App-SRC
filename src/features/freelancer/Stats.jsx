import React from 'react'
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi'
import Stat from '../../ui/Stat'
import Loading from '../../ui/Loading'
import useProposals from '../proposals/useProposals'
import { toPersianNumbersWithComma } from '../../utils/toPersionNumbers'

function Stats() {
    const {isLoading, proposals} = useProposals()

    const numOfProposals = proposals?.length;
    const numOfAccessProposals = proposals?.filter(proposal => proposal.status == 2)?.length;
    const price = proposals?.reduce((acc, curr) => acc + curr.price, 0);
    console.log(proposals);
    

    if(isLoading) return <Loading width={90} height={80}/>

    return (
        <div className='grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 gap-2'>
            <Stat
                icon={<HiOutlineViewGrid className="w-10 md:w-20 h-10 md:h-20" />}
                title='درخواست ها'
                value={numOfProposals}
                color='yellow'
            />
            <Stat
                icon={<HiCurrencyDollar className="w-10 md:w-20 h-10 md:h-20" />}
                title='درخواست پذیرفته شده'
                value={numOfAccessProposals}
                color='green'
            />
            <Stat
                icon={<HiCollection className="w-10 md:w-20 h-10 md:h-20" />}
                title='کیف پول'
                value={toPersianNumbersWithComma(price)}
                color='primary'
            />
        </div>
    )
}

export default Stats
