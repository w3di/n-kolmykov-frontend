import styles from './hero.module.scss';

import { CollectionBlock } from '@/components/base';

const KnowledgeHero = () => {
  return (
    <section className={styles.hero}>
      <CollectionBlock icon='book' label='Проверка знаний' />
      <div className={styles.textBlock}>
        <h1 className={styles.textBlock__title}>Проверка знаний</h1>
        <p className={styles.textBlock__description}>
          Выберите разделы и темы, чтобы проверить свои знания. Отвечайте
          мысленно, затем раскрывайте ответ и оценивайте себя.
        </p>
      </div>
    </section>
  );
};

export default KnowledgeHero;
