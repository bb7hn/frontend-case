import { Character } from '@/graphql/getCharacters'
import { useDataStore } from '@/store/DataStore'
import React from 'react'

interface TagProps{
  id:string,
  text:string
}

export default function Tag ({id,text}:TagProps) {
  const removeCharacter = useDataStore(s=>s.removeCharacter)
  return (
    <button 
    onClick={()=>removeCharacter(id)}
    className="text-sm bg-gray-200 p-1 px-1.5 rounded-sm flex items-center justify-center gap-1 select-none">
        {text}
        <div 
            className='text-xs p-0.5 rounded w-5 h-5 border bg-gray-400 text-white'>X</div>
    </button>
  )
}
