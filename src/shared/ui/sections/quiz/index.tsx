'use client';
import Image from 'next/image';
import styles from './quiz.module.scss';
import { Icon } from '@/src/shared/ui/kit';
import Link from 'next/link';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

export default function Quiz() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        sectionRef.current.style.setProperty('--mouse-x', `${x}%`);
        sectionRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    const element = sectionRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);

      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <section ref={sectionRef} className={styles.quiz}>
      <div className={styles.backgroundLayer}>
        <Image
          src='/images/codeshow.webp'
          alt='code_show'
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
          Проверьте свои знания, пройдя
          <br />
          интерактивный квиз
        </p>

        <Link href='/quiz' className={clsx(styles.button, styles.button_text)}>
          Пройти квиз
          <Icon name='arrowRight' className={styles.button_icon} />
        </Link>
      </div>
    </section>
  );
}
