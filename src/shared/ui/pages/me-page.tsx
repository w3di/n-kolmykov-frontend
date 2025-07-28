import { Separator } from '@/src/shared/ui/kit';
import { Defaults } from '@/src/shared/ui/layout';
import styles from './me.module.scss';
import AboutMe from '../sections/about-me';
import ContactMe from '../sections/contact-me';
import HiItsMe from '../sections/hi-its-me';
import MySkills from '../sections/my-skills';
import MyStack from '../sections/my-stack';

export function MePage() {
  return (
    <Defaults className={styles.me}>
      <HiItsMe />
      <Separator />
      <AboutMe />
      <Separator />
      <MySkills />
      <Separator />
      <MyStack />
      <Separator />
      <ContactMe />
    </Defaults>
  );
}
