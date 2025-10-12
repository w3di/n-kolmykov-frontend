import { Separator } from '@/components/base';
import { Defaults } from '@/components/layout';
import CodeExamples from '@/components/sections/home/code-examples';
import Hero from '@/components/sections/home/hero';
import Pull from '@/components/sections/home/pull';
import Quiz from '@/components/sections/home/quiz';
import Stats from '@/components/sections/home/stats';

import styles from './home.module.scss';

export const HomePage = () => {
  return (
    <Defaults className={styles.home}>
      <Hero />
      <Stats />
      <Quiz />
      <Separator />
      <Pull />
      <CodeExamples />
    </Defaults>
  );
};
