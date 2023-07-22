import React from 'react'

export default function CheckBox({ name, checked, onChange, title }) {
    return (
        <div className='flex gap-2'>
            <input type='checkbox' name={name} checked={checked} onChange={onChange} />
            <h4 className='text-text text-xs my-1 font-semibold'>{title}</h4>
        </div>
    )
}
