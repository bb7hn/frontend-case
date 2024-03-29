import React from 'react';

function useDebounce<T>(value:T, durationInMs = 500) {
  const [val, setVal] = React.useState<T>(value);
  React.useEffect(() => {
    const tout = setTimeout(() => {
      setVal(value);
    }, durationInMs);

    return () => clearTimeout(tout);
  }, [durationInMs, value]);

  return (
    val
  );
}

export default useDebounce;
