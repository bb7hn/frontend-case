import useDataStore from '@/store/DataStore';
import React from 'react';

export default function Tag({ id, text }:TagProps) {
  const removeCharacter = useDataStore((s) => s.removeCharacter);
  return (
    <button
      type="button"
      onClick={() => removeCharacter(id)}
      className="text-sm bg-gray-200 p-1 px-1.5 rounded-sm flex items-center justify-center gap-1 select-none TagButton"
    >
      {text}
      <div
        className="text-xs p-0.5 rounded w-5 h-5 border bg-gray-400 text-white"
      >
        X
      </div>
    </button>
  );
}
