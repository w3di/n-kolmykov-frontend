import React from 'react';
import clsx from 'clsx';
import styles from './separator.module.scss';

interface SeparatorProps {
  className?: string;
}

export default function Separator({ className }: SeparatorProps) {
  return <hr className={clsx(styles.separator, className)} />;
}
