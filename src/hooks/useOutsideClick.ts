import React from 'react';
import useEventListener from './useEventListener';

export default function useOutsideClick(ref: React.RefObject<HTMLElement>, callback: () => void) {
  const handleClickOutside = React.useCallback((event: Event) => {
    if (
      !ref.current
      || (ref.current !== event.target && !ref.current.contains(event.target as Node))
    ) {
      callback();
    }
  }, [callback, ref]);

  useEventListener('click', handleClickOutside);

  return {
    ref,
  };
}