import styles from './home.module.scss';

import Hero from '../../sections/home/hero';
import Stats from '../../sections/home/stats';
import Quiz from '../../sections/home/quiz';
import Pull from '../../sections/home/pull';
import CodeExamples from '../../sections/home/code-examples';
import { Separator } from '../../base';
import { Defaults } from '../../layout';

export function HomePage() {
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
}
