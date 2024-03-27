import React from 'react'
import Tag from './Tag'

const Tags = () => {
    return null;
    return (
        <div className='flex gap-1 flex-wrap max-w-80 items-center justify-center border p-2 rounded'>
            <Tag text='Morty Smith'/>
            <Tag text='Cool Rick'/>
            <Tag text='Morty Smith'/>
            <Tag text='Cool'/>
            <Tag text='Cool Rick'/>
            <Tag text='Morty Smith'/>
            <Tag text='Cool Rick'/>
        </div>
    )
}

export default Tags