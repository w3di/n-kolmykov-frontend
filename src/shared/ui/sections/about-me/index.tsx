import { CollectionBlock, Icon } from '@/src/shared/ui/kit';
import styles from './about-me.module.scss';

export default function AboutMe() {
  const qualities = [
    {
      icon: 'boundingBox' as const,
      title: 'Легкость',
      description: 'Изучаю новый материал и постоянно учусь'
    },
    {
      icon: 'globeSimple' as const,
      title: 'Универсальность',
      description: 'Готов брать на себя полный цикл разработки'
    },
    {
      icon: 'graph' as const,
      title: 'Ответственность',
      description: 'Гарантирую исполнение любого проекта в срок'
    }
  ];

  return (
    <section className={styles.aboutMe}>
      <div className={styles.BlockInfo}>
        <CollectionBlock icon='smiley' label='Обо мне' />
        <p className={styles.BlockInfo__description}>
          Frontend разработчик с опытом работы 3 года, в течение которых я
          создавал сайты и мобильные приложения. Люблю оптимизировать
          существующие приложения и привносить автоматизацию в проекты. В
          свободное время занимаюсь изучением DevOps, backend и развиваюсь в
          качестве Fullstack JS разработчика.
          <br />
          <br />
          Имею успешный опыт преподавания разработки. Этот проект создан с целью
          поделиться знаниями и помочь разработчикам подготовиться к техническим
          собеседованиям. Здесь собраны актуальные вопросы, практические задания
          и проверенные решения.
        </p>
      </div>
      <ul className={styles.BlockList}>
        {qualities.map((quality, index) => (
          <li key={index} className={styles.BlockList__item}>
            <Icon
              name={quality.icon}
              className={styles.BlockList__item__icon}
            />
            <div className={styles.BlockList__item__textWrapper}>
              <p className={styles.BlockList__item__title}>{quality.title}</p>
              <p className={styles.BlockList__item__description}>
                {quality.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
