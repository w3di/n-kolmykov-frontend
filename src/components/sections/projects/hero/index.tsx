import styles from './hero.module.scss';

import { CollectionBlock } from '@/components/base';

const ProjectsHero = () => {
  return (
    <section className={styles.hero}>
      <CollectionBlock icon='sparkle' label='Портфолио' />
      <div className={styles.textBlock}>
        <h1 className={styles.textBlock__title}>Мои проекты</h1>
        <p className={styles.textBlock__description}>
          Подборка коммерческих и open-source проектов, над которыми я работал.
          Веб-приложения, мобильные приложения и инструменты разработки.
        </p>
      </div>
    </section>
  );
};

export default ProjectsHero;
