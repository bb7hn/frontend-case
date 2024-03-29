import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import useDataStore from '@/store/DataStore';
import GET_CHARACTERS from '@/graphql/getCharacters';
import Search from './Search';
import Results from './Results';
import RenderIf from '../RenderIf';

function Select() {
  const wrapperRef = React.useRef < HTMLDivElement>(null);
  const [isVisbile, setIsVisible] = React.useState(false);
  const addCharacters = useDataStore((s) => s.addCharacters);
  const setInfo = useDataStore((s) => s.setInfo);

  const page = useDataStore((s) => s.page);
  const query = useDataStore((s) => s.query);

  const { loading, error, data } = useQuery<GetCharactersResponse>(GET_CHARACTERS, {
    variables: {
      page, query,
    },
  });

  const handleClicks = (e:MouseEvent) => {
    const element = e.target as HTMLElement;
    if (element.classList.contains('TagButton')) {
      return;
    }
    setIsVisible(!(wrapperRef.current && !wrapperRef.current.contains(element)));
  };
  useEffect(() => {
    window.addEventListener('click', handleClicks);
    return () => window.removeEventListener('click', handleClicks);
  }, []);

  useEffect(() => {
    if (!data || error) return;

    addCharacters(data.characters.results);
    setInfo(data.characters.info);
  }, [data, error, addCharacters, setInfo]);

  if (error) {
    return (
      <div className="bg-red-400 w-80 p-2 rounded">
        <p>
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <div ref={wrapperRef}>
      <Search />
      <RenderIf condition={isVisbile}>
        <Results loading={loading} />
      </RenderIf>
    </div>
  );
}

export default Select;
