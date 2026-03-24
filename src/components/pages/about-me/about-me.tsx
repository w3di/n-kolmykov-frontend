import styles from './about-me.module.scss';

import { Separator } from '@/components/base';
import { Defaults } from '@/components/layout';
import AboutMe from '@/components/sections/about/about-me';
import ContactMe from '@/components/sections/about/contact-me';
import HiItsMe from '@/components/sections/about/hi-its-me';
import MySkills from '@/components/sections/about/my-skills';
import MyStack from '@/components/sections/about/my-stack';

export const AboutMePage = () => {
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
};
