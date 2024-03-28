import React from 'react';
import useDataStore from '@/store/DataStore';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import Character, { CharacterShimmer } from './Character';

interface ResultsProps {
  loading:boolean
}
function Results({ loading }:ResultsProps) {
  const characters = useDataStore((state) => state.characters);
  const resultInfo = useDataStore((s) => s.info);
  const setPage = useDataStore((s) => s.setPage);

  function focus(key:'nextElementSibling' | 'previousElementSibling') {
    const elementSibling = document.activeElement?.[key];
    if (elementSibling) {
      (elementSibling as HTMLElement).focus();
    }
  }

  const ACTIONS:Record<KeyboardEvent['key'], (e?:KeyboardEvent)=>void> = React.useMemo(() => ({
    ArrowDown: () => focus('nextElementSibling'),
    ArrowUp: () => focus('previousElementSibling'),
    Enter: () => focus('nextElementSibling'),
  }), []);

  const handleKeyDown = React.useCallback((e:KeyboardEvent) => {
    const handler = ACTIONS[e.key];
    if (handler) {
      e.preventDefault();
      handler(e);
    }
  }, [ACTIONS]);

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyDown);
    return () => window.removeEventListener('keyup', handleKeyDown);
  }, [handleKeyDown]);

  if (characters.length === 0 && !loading) {
    return (
      <div className="w-80 border rounded flex items-center justify-center h-96">
        <p className="font-semibold text-lg">No result</p>
      </div>
    );
  }

  const isItemLoaded = (index:number) => !!characters[index];

  // eslint-disable-next-line react/no-unstable-nested-components
  function Row({ index, style }:{ index:number, style:React.CSSProperties }) {
    const character = characters[index];

    if (character) {
      return <Character character={character} style={style} key={index} />;
    }
    return <CharacterShimmer style={style} />;
  }

  const loadMoreItems = () => {
    if (resultInfo.next !== null) {
      setPage(resultInfo.next);
    }
  };

  return (
    <div>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={resultInfo.count}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            className="w-80 border rounded flex flex-col h-96"
            height={384}
            itemCount={loading ? 6 : resultInfo.count}
            itemSize={64}
            onItemsRendered={onItemsRendered}
            ref={ref}
            width={320}
          >
            {Row}
          </List>
        )}
      </InfiniteLoader>
    </div>

  );
}

export default Results;
