import React from 'react';

import clsx from 'clsx';

import styles from './separator.module.scss';

interface SeparatorProps {
  className?: string;
}

const Separator = ({ className }: SeparatorProps) => {
  return <hr className={clsx(styles.separator, className)} />;
};

export default Separator;
