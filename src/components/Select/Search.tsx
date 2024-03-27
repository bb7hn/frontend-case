import { useDataStore } from '@/store/DataStore';
import useDebounce from '@/hooks/useDebounce';
import React from 'react'

const Search = () => {
    const inputId = React.useId();

    const [search,setSearch] = React.useState('');
    const debouncedQuery = useDebounce(search);

    const setQuery = useDataStore(s=>s.setQuery);

    React.useEffect(()=>{
        setQuery(debouncedQuery)
    },[debouncedQuery, setQuery])

    return (
        <label htmlFor={inputId} className="flex border border-gray-400 w-80 rounded-md cursor-pointer">
            <input
                value={search}
                onChange={e=>setSearch(e.target.value)}
                id={inputId} className="outline-none rounded-md p-1 px-1.5 w-full"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-auto my-auto" viewBox="0 0 512 512"><path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"/></svg>
        </label>
    )
}

export default Search