import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

function Loading({ height, width }) {
    return (
        <div>
            <ThreeDots
                height={height}
                width={width}
                radius="10"
                color="rgb(var(--color-primary-900))"
                ariaLabel="loading"
            />

        </div>
    )
}

export default Loading
