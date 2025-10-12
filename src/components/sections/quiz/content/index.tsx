'use client';

import { useState } from 'react';

import CurrentQuestion from '@/components/sections/quiz/current-question';
import Finished from '@/components/sections/quiz/finished';
import Information from '@/components/sections/quiz/information';

export const Content = () => {
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
};
