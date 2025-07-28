import { Icon } from '@/src/shared/ui/kit';
import styles from './code-examples.module.scss';

export default function CodeExamples() {
  return (
    <section className={styles.codeExamples}>
      <div className={styles.text}>
        <div className={styles.text__row}>
          <span>Интерактивные</span>
          <span className={styles.text__block}>
            <Icon name='gitFork' className={styles.text__icon} />
            <span>задания</span>
          </span>
          <span className={styles.text__spacing}>и тесты</span>
        </div>
        <div className={styles.text__row}>
          <span>для проверки</span>
          <span className={styles.text__block}>
            <Icon name='bookmarkSimple' className={styles.text__icon} />
            <span>знаний</span>
          </span>
        </div>
      </div>
    </section>
  );
}
