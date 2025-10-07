'use client';

import { useState } from 'react';
import CurrentQuestion from '../current-question';
import Finished from '../finished';
import Information from '../information';

export function Content() {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <>
      {isFinished ? (
        <Finished />
      ) : (
        <>
          <Information />
          <CurrentQuestion setIsFinished={setIsFinished} />
        </>
      )}
    </>
  );
}
