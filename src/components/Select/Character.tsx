import { useDataStore } from '@/store/DataStore'
import { Character } from '@/graphql/getCharacters'
import Image from 'next/image'
import React from 'react'
import HighlightText from '../HighlightText'

type CharacterProps={
    character:Character
}
const Character = ({character}:CharacterProps) => {
    const query = useDataStore(s=>s.query);
    return (
        <div className='flex gap-2 py-2'>
            <input type='checkbox' />
            <Image 
                className='rounded' 
                alt={character.name} 
                src={character.image} 
                width={40} 
                height={48}
                objectFit='contain'
            />
            <div className='flex flex-col'>
                <HighlightText text={character.name} highlight={query}/>
                <p className='text-gray-400'>{character.episode.length} episode(s)</p>
            </div>
        </div>
    )
}

export const CharacterShimmer = ()=>{
        return <div className='flex gap-2 py-2 animate-pulse flex-grow'>
            <input type='checkbox' checked={false} disabled/>
            <div className='!w-10 !h-12 rounded border'/>
            <div className='flex flex-col flex-grow'>
                <span className='w-full h-4 mb-2 bg-gray-100 rounded'/>
                <span className='w-full h-4 bg-gray-100 rounded'/>
            </div>
        </div>
}

export default Character