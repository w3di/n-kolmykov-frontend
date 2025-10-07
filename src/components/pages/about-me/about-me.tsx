import styles from './about-me.module.scss';
import AboutMe from '../../sections/about/about-me';
import ContactMe from '../../sections/about/contact-me';
import HiItsMe from '../../sections/about/hi-its-me';
import MySkills from '../../sections/about/my-skills';
import MyStack from '../../sections/about/my-stack';
import { Separator } from '../../base';
import { Defaults } from '../../layout';

export function AboutMePage() {
  return (
    <Defaults className={styles.aboutMe}>
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
