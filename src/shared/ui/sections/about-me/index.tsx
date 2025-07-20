import { CollectionBlock, Icon } from "@/src/shared/ui/kit";
import styles from "./about-me.module.scss";

export default function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.BlockInfo}>
        <CollectionBlock icon="smiley" label="Обо мне" />
        <p className={styles.BlockInfo__description}>
          Я Fullstack Frontend разработчик с 3-х летним опытом создания
          современных веб-приложений. Специализируюсь на React, Typescrpt и
          Next.js, но также имею опыт работы с бэкедом (Node.js. Nest.js) и
          различными базами данных
          <br />
          <br />
          Этот проект был создан с целью помочь разработчика подготовиться к
          техническим собеседованиям. Здесь собраны актуальные вопросы и ответы,
          которые часто задают на интервью, а также практические задания для
          проверки знаний.
        </p>
      </div>
      <ul className={styles.BlockList}>
        <li className={styles.BlockList__item}>
          <Icon name="boundingBox" className={styles.BlockList__item__icon} />
          <div className={styles.BlockList__item__textWrapper}>
            <p className={styles.BlockList__item__title}>Легкость</p>
            <p className={styles.BlockList__item__description}>
              Изучаю новый материал и постоянно учусь
            </p>
          </div>
        </li>
        <li className={styles.BlockList__item}>
          <Icon name="globeSimple" className={styles.BlockList__item__icon} />
          <div className={styles.BlockList__item__textWrapper}>
            <p className={styles.BlockList__item__title}>Универсальность</p>
            <p className={styles.BlockList__item__description}>
              Готов брать на себя полный цикл разработки
            </p>
          </div>
        </li>
        <li className={styles.BlockList__item}>
          <Icon name="graph" className={styles.BlockList__item__icon} />
          <div className={styles.BlockList__item__textWrapper}>
            <p className={styles.BlockList__item__title}>Ответственность</p>
            <p className={styles.BlockList__item__description}>
              Гарантирую исполнение любого проекта в срок
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
