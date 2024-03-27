import React, { useEffect, useId, useState } from 'react'
import Tag from './Tag'
import useDebounce from '@/hooks/useDebounce';
import Results from './Results';
import { GET_CHARACTERS, GET_CHARACTERS_RESPONSE } from '@/graphql/getCharacters';
import { useQuery } from '@apollo/client';
import { useDataStore } from '@/store/DataStore';
import Tags from './Tags';
import Search from './Search';
import client from '@/graphql/client';

const Select = () => {

    const addCharacters = useDataStore(s=>s.addCharacters)
    const setInfo = useDataStore(s=>s.setInfo)

    const page = useDataStore(s=>s.page)
    const query = useDataStore(s=>s.query)

    const { loading, error, data } = useQuery<GET_CHARACTERS_RESPONSE>(GET_CHARACTERS(page,query));

    /* useEffect(()=>{
        //get initial characters
        client.query({
            query:GET_CHARACTERS(page,query)
        }).then(res=>{
            addCharacters(res.data.characters.results)
            setInfo(res.data.characters.info)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) */

    useEffect(()=>{
        if(!data || error) return
        
        addCharacters(data.characters.results)
        setInfo(data.characters.info)
        
    },[data, error, addCharacters, setInfo])

    return (
        <>
            <Search/>
        </>
    )
}

export default Select