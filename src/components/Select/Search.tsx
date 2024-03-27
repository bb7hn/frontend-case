import { useDataStore } from '@/store/DataStore';
import useDebounce from '@/hooks/useDebounce';
import React from 'react'
import Tags from './Tags';
import Results from './Results';
import useOutsideClick from '@/hooks/useOutsideClick';

const Search = () => {
    const inputId = React.useId();
    const ref = React.useRef<HTMLDivElement>(null);

    const [showResults,setShowResults] = React.useState(false)

    const [search,setSearch] = React.useState('');
    const debouncedQuery = useDebounce(search);

    const setPage = useDataStore(s=>s.setPage);
    const setQuery = useDataStore(s=>s.setQuery);

    React.useEffect(()=>{
        setQuery(debouncedQuery)
    },[debouncedQuery, setPage, setQuery])

    

    useOutsideClick(ref,()=>{
        console.log('here1');
        setShowResults(false)
    })

    return (
        <div
        onClick={()=>{
            console.log('here2');
            setShowResults(true)
        }}
        ref={ref}
        >
            <div 
                className="flex flex-col border border-gray-400 w-80 rounded-md cursor-pointer p-1 px-1.5 mb-2">
                <Tags/>
                <label htmlFor={inputId} className='flex items-center cursor-text p-1'>
                    <input
                        value={search}
                        onChange={e=>setSearch(e.target.value)}
                        id={inputId} 
                        className="outline-none rounded-md w-auto"
                        placeholder='search...'
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-auto my-auto" viewBox="0 0 512 512"><path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"/></svg>
                </label>
            </div>

            {showResults&&<Results/>}
        </div>
    )
}

export default Search