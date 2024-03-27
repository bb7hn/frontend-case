import { Character, ResultInfo } from '@/graphql/getCharacters';
import { useQuery } from '@apollo/client';
import { create } from 'zustand'
import { combine } from 'zustand/middleware';

type SelectedCharacter={
    id:string
    name:string
}

interface DataState {
    info:ResultInfo,
    setInfo:(p:ResultInfo)=>void,

    page:number,
    setPage:(p:number)=>void

    query:string,
    setQuery:(q:string)=>void

    characters: Character[]
    addCharacters: (c: Character[]) => void

    selectedCharacters:SelectedCharacter[]
    toggleCharacter:(c:Character)=>void
    removeCharacter:(id:string)=>void
}

export const useDataStore = create<DataState>()((set,get) => ({
    info:{
        count:0,
        pages:0,
        next:null,
        prev:null
    },
    setInfo: (i:ResultInfo) => set((state)=>({info:i})),

    page:1,
    setPage:(p:number)=>set(()=>({page:p})),

    query:'',
    setQuery: (q:string) => set(()=>({page:1,query:q,characters:[]})),

    characters: [],
    addCharacters: (c) => set((state) => ({ characters: state.characters.concat(c) })),

    selectedCharacters:[],
    toggleCharacter:(character)=>set((state)=>{
        if(state.selectedCharacters.findIndex(c=>c.id===character.id)!==-1){
            return {selectedCharacters:[...state.selectedCharacters.filter(c=>c.id!==character.id)]}
        }
        return {selectedCharacters:state.selectedCharacters.concat({id:character.id,name:character.name})}
    }),
    removeCharacter:(id)=>set((state)=>{
        return{selectedCharacters:state.selectedCharacters.filter(c=>c.id!==id)}
    })
    
}))