import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import styles from './quiz.module.scss';
import QuizSectionWrapper from './ui/quiz-section-wrapper/quiz-section-wrapper';

import { Icon } from '@/components/base';

const Quiz = () => {
  return (
    <QuizSectionWrapper>
      <div className={styles.backgroundLayer}>
        <Image
          src='/images/codeshow.webp'
          alt='Пример кода для подготовки к собеседованию'
          loading='lazy'
          width={1016}
          height={635}
          className={styles.codeShowImage}
        />
        <div className={styles.blurBlock} />
      </div>

      <div className={styles.contentLayer}>
        <div className={styles.contentLayer__lightningCircle}>
          <div className={styles.contentLayer__lightningCircle__iconBg}>
            <Icon
              name='lightning'
              className={styles.contentLayer__lightningCircle__iconBg__icon}
            />
          </div>
        </div>
        <p className={styles.contentLayer__text}>
          Проверьте свои знания
          <br />
          по актуальным технологиям
        </p>

        <Link
          href='/knowledge'
          className={clsx(styles.button, styles.button_text)}
        >
          Проверить знания
          <Icon name='arrowRight' className={styles.button_icon} />
        </Link>
      </div>
    </QuizSectionWrapper>
  );
};

export default Quiz;
