import useDataStore from '@/store/DataStore';
import Image from 'next/image';
import React from 'react';
import HighlightText from '../HighlightText';
import Checkbox, { CheckboxShimmer } from '../Checkbox';

function Character({ character, style }:CharacterProps) {
  const query = useDataStore((s) => s.query);
  const toggleCharacter = useDataStore((s) => s.toggleCharacter);
  const selectedCharacters = useDataStore((s) => s.selectedCharacters);
  return (
    <button
      title={character.name}
      onClick={() => toggleCharacter(character)}
      type="button"
      className="flex gap-2 p-2 border-b items-center last:border-b-0"
      style={style}
    >
      {/* create custom checkbox */}
      <Checkbox checked={selectedCharacters.find((c) => c.id === character.id) !== undefined} />
      <Image
        className="rounded"
        alt={character.name}
        src={character.image}
        width={40}
        height={40}
      />
      <div className="flex flex-col items-start">
        <HighlightText text={character.name} highlight={query} />
        <p className="text-gray-400">
          {character.episode.length}
          {' '}
          episode
          {character.episode.length > 1 && 's'}
        </p>
      </div>
    </button>
  );
}

export function CharacterShimmer({ style }:CharacterShimmerProps) {
  return (
    <div
      className="flex gap-2 p-2 border-b items-center last:border-b-0"
      style={style}
    >
      {/* create custom checkbox */}
      <CheckboxShimmer />
      <div
        className="rounded border w-10 h-10"
      />
      <div className="flex flex-col items-start flex-1">
        <span className="w-3/4 bg-gray-100 h-4 mb-2 rounded" />
        <span className="w-1/2 bg-gray-100 h-4 rounded" />
      </div>
    </div>
  );
}

export default Character;
