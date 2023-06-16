import { useEffect, useRef, useState } from 'react';

export function useSearch() {
  const [search, setSearch] = useState('');
  const [errorSearch, setErrorSearch] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if (search === '') {
      setErrorSearch('Please provide a search movie name');
    }
  }, [search]);

  return { search, setSearch, errorSearch };
}
