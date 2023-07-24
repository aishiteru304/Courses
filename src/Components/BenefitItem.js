import React from 'react'

export default function BenefitItem({ icon, title, desc }) {
    return (
        <>
            <div className='flex gap-2 text-main items-center'>
                <div className='text-xl'>{icon}</div>
                <h4 className='text-base font-semibold'>{title}</h4>
            </div>
            <p className='mt-2 text-justify text-base font-normal'>{desc}</p>
        </>
    )
}
