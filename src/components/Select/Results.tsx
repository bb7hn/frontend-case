import React from 'react'
import Character, { CharacterShimmer } from './Character';
import { useDataStore } from '@/store/DataStore';
import InfiniteScroll from 'react-infinite-scroll-component';

const Results = () => {
    const characters = useDataStore((state) => state.characters)
    const resultInfo = useDataStore(s=>s.info)
    const page = useDataStore(s=>s.page)
    const setPage = useDataStore(s=>s.setPage);
    

    console.log(characters.length,resultInfo,page);

    if(characters.length===0){
        return null
    }

    function handleNext(){
        if(resultInfo.next!==null){
            setPage(resultInfo.next)
        }
    }

    return (
        <div>   
            <InfiniteScroll
                className="w-80 border rounded p-2 divide-y-2 flex flex-col h-96 overflow-x-auto"
                dataLength={characters.length}
                next={handleNext}
                hasMore={resultInfo.pages!==page}
                loader={<>
                    <CharacterShimmer/>
                    <CharacterShimmer/>
                    <CharacterShimmer/>
                    <CharacterShimmer/>
                </>}
                height={384}
                /* endMessage={
                    <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                } */
                >
                    {characters.map((c,idx)=><Character key={idx} character={c}/>)}
            </InfiniteScroll>
        </div>
        
    )
}

export default Results