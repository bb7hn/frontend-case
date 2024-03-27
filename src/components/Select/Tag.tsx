import React from 'react'

interface TagProps{
    text:string
    onRemove?:()=>(Promise<void>|void)
}

export default function Tag ({text,onRemove}:TagProps) {
  return (
    <div className="text-sm bg-gray-200 p-1 px-1.5 rounded-sm flex items-center justify-center gap-1 select-none">
        {text}
        <button 
            onClick={onRemove}
            className='text-xs p-0.5 rounded w-5 h-5 border bg-gray-400 text-white' type='button'>X</button>
    </div>
  )
}
