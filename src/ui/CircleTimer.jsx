import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

function CircleTimer({ initialValue, setValue }) {

    const children = (remainingTime) => {

        if(remainingTime == 0) setValue(0)

        const minutes = (Math.floor(remainingTime / 60)).toString().padStart(2, 0)
        const seconds = (remainingTime % 60).toString().padStart(2, 0)

        return <span className='text-primary-900'>{minutes}:{seconds}</span>
    }

    return (
        <div className='flex items-center justify-center'>
            <CountdownCircleTimer
                isPlaying
                duration={initialValue}
                colors={['rgb(var(--color-primary-900))']}
                initialRemainingTime={initialValue}
                strokeWidth={20}
                size={160}
                trailColor='rgb(var(--color-primary-100))'
            >
                {({ remainingTime }) => children(remainingTime)}
            </CountdownCircleTimer>
        </div>
    )
}

export default CircleTimer
