import React from 'react'

export default function Mentor({ mentor }) {
    return (
        <div className='px-2'>
            <div className='h-[200px] -mx-2'>
                <img alt='mentor' src={mentor.image} className='h-full w-full object-cover rounded-md'></img>
            </div>
            <h2 className='text-main text-center my-3 font-semibold'>{mentor.name}</h2>
            <p className='text-text text-justify  line-clamp-4 px-2'>{mentor.desc}</p>
            <div className='flex justify-center mb-6 mt-3'>
                <button className='btn-main text-sm w-full transitions'>Xem chi tiết</button>
            </div>
        </div>
    )
}
