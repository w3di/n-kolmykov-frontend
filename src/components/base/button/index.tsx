import clsx from 'clsx';

import styles from './button.module.scss';

interface ButtonProps {
  label: string;
  variant: 'white' | 'black';
  onClick?: () => void;

  className?: string;
}

const Button = ({ label, variant, onClick, className }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[`button--${variant}`], className)}
      onClick={onClick}
      type='button'
    >
      <span
        className={clsx(
          styles.button__text,
          styles[`button__text--${variant}`]
        )}
      >
        {label}
      </span>
    </button>
  );
};

export default Button;
