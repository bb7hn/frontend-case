import { Character, ResultInfo } from '@/graphql/getCharacters';
import { useQuery } from '@apollo/client';
import { create } from 'zustand'
import { combine } from 'zustand/middleware';

interface DataState {
    info:ResultInfo,
    setInfo:(p:ResultInfo)=>void,

    page:number,
    setPage:(p:number)=>void

    query:string,
    setQuery:(q:string)=>void

    characters: Character[]
    addCharacters: (c: Character[]) => void
}

export const useDataStore = create<DataState>()((set) => ({
    info:{
        count:0,
        pages:0,
        next:null,
        prev:null
    },
    setInfo: (i:ResultInfo) => set((state)=>({info:i})),

    page:0,
    setPage:(p:number)=>set(()=>({page:p})),

    query:'',
    setQuery: (q:string) => set(()=>({query:q})),

    characters: [],
    addCharacters: (c) => set((state) => ({ characters: state.characters.concat(c) })),
}))