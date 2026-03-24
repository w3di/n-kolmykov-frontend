import React from 'react';

import clsx from 'clsx';

import styles from './accordion.module.scss';

import Icon from '@/components/base/icon';

interface AccordionProps {
  title: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Accordion = ({
  title,
  defaultOpen,
  className,
  children
}: AccordionProps) => {
  return (
    <details className={clsx(styles.accordion, className)} open={defaultOpen}>
      <summary className={styles.summary}>
        <span className={styles.summary__title}>{title}</span>
        <Icon name='arrowBack' className={styles.summary__icon} />
      </summary>
      {children}
    </details>
  );
};

export default Accordion;
