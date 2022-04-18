import React, { ReactElement } from 'react';
import useFetch from './hooks/useFetch';

interface Data {
  slip: {
    advice: string;
  };
}

export default function App(): ReactElement {
  const [data, loading] = useFetch<Data>('https://api.adviceslip.com/advice', {
    slip: { advice: '' },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app">
      <h1>{data?.slip.advice}</h1>
    </div>
  );
}
