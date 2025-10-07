'use client';

import { useEffect, useRef } from 'react';
import styles from './quiz-section-wrapper.module.scss';

interface QuizSectionWrapperProps {
  children: React.ReactNode;
}

export default function QuizSectionWrapper({
  children
}: QuizSectionWrapperProps) {
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
    <section ref={sectionRef} className={styles.quizSectionWrapper}>
      {children}
    </section>
  );
}
