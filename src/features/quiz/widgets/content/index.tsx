'use client';

import { CurrentQuestion, Finished, Information } from '../../ui';
import { useState } from 'react';

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
