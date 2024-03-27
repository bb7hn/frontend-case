import React from 'react'
import Tag from './Tag'
import { useDataStore } from '@/store/DataStore'
import classNames from 'classnames'

const Tags = () => {
    const selectedCharacters = useDataStore(s=>s.selectedCharacters)
    return (
        <div className={classNames('flex flex-wrap items-center gap-1',{
            'border-b pb-1':selectedCharacters.length>0
        })}>
            {selectedCharacters.map(c=><Tag key={c.id} id={c.id} text={c.name}/>)}
        </div>
    )
}

export default Tags