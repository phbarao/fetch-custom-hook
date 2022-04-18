import { useEffect, useState } from 'react';

const useFetch = <T>(url: string, initialState: T): [T, boolean] => {
  const [data, setData] = useState<T>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .finally(() => setLoading(false));
  }, [url]);

  return [data, loading];
};

export default useFetch;
