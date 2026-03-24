import clsx from 'clsx';

import styles from './my-skills.module.scss';
import { Squares } from './ui';

import { Icon } from '@/components/base';

const skillsData = [
  {
    id: 1,
    icon: 'pcBlack',
    colorVariant: 'white',
    text: 'Разработка высоконагруженных веб-интерфейсов',
    borderColor: 'rgba(226, 226, 226, 1)',
    hoverFillColor: 'rgba(240, 240, 240, 1)'
  },
  {
    id: 2,
    icon: 'pcOrange',
    colorVariant: 'orange',
    text: 'Создание архитектуры и оптимизации',
    borderColor: 'rgba(255, 232, 224, 1)',
    hoverFillColor: 'rgba(255, 232, 224, 1)'
  },
  {
    id: 3,
    icon: 'phoneBlue',
    colorVariant: 'blue',
    text: 'Разработка мобильных приложений',
    borderColor: 'rgba(217, 241, 249, 1)',
    hoverFillColor: 'rgba(217, 241, 249, 1)'
  },
  {
    id: 4,
    icon: 'tagGreen',
    colorVariant: 'green',
    text: 'Разработка CI/CD пайплайнов',
    borderColor: 'rgba(215, 249, 235, 1)',
    hoverFillColor: 'rgba(215, 249, 235, 1)'
  }
] as const;

const MySkills = () => {
  return (
    <section className={styles.mySkills}>
      <h2 className={styles.title}>
        <strong>FullStack Evolution:</strong> от интерфейсов до инфраструктуры
      </h2>
      <ul className={styles.squaresList}>
        {skillsData.map((skill) => (
          <li key={skill.id} tabIndex={0} aria-label={skill.text}>
            <div className={styles.squaresList__item}>
              <div
                className={clsx(
                  styles.squaresList__item__iconWrapper,
                  styles[`squaresList__item__iconWrapper_${skill.colorVariant}`]
                )}
              >
                <Icon
                  name={skill.icon}
                  className={styles.squaresList__item__icon}
                />
              </div>
              <Squares
                speed={0.1}
                squareSize={40}
                direction='diagonal'
                borderColor={skill.borderColor}
                hoverFillColor={skill.hoverFillColor}
                borderStyle='dashed'
                dashPattern={[8, 4]}
                className={clsx(
                  styles.squaresList__item__background,
                  styles[`squaresList__item__background_${skill.colorVariant}`]
                )}
              />
            </div>
            <div className={styles.squaresList__textItem}>
              <p className={styles.squaresList__textItem__text}>{skill.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MySkills;
