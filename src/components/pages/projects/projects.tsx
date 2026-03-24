import styles from './projects.module.scss';

import { Separator } from '@/components/base';
import { Defaults } from '@/components/layout';
import ProjectsHero from '@/components/sections/projects/hero';
import ProjectList from '@/components/sections/projects/project-list';

export const ProjectsPage = () => {
  return (
    <Defaults className={styles.projects}>
      <ProjectsHero />
      <Separator />
      <ProjectList />
    </Defaults>
  );
};
