import React from 'react';
import useDataStore from '@/store/DataStore';
import classNames from 'classnames';
import Tag from './Tag';

function Tags() {
  const selectedCharacters = useDataStore((s) => s.selectedCharacters);
  return (
    <div className={classNames('flex flex-wrap items-center gap-1', {
      'border-b p-2': selectedCharacters.length > 0,
    })}
    >
      {selectedCharacters.map((c) => <Tag key={c.id} id={c.id} text={c.name} />)}
    </div>
  );
}

export default Tags;
