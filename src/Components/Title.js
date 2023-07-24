import React from 'react'

export default function Title({ title }) {
    return (
        <div className='text-black font-semibold md:text-3xl text-xl w-full text-center'>
            {title}
        </div>
    )
}
