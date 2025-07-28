import { Icon } from '..';
import { IconName } from '../icon';
import styles from './tag.module.scss';

interface TagProps {
  count?: string;
  label: string;
  afterLabel?: string;
  icon: IconName;
}

export default function Tag({ count, label, icon, afterLabel }: TagProps) {
  return (
    <div className={styles.tag}>
      <Icon name={icon} className={styles.tag__bookIcon} />
      <hr className={styles.tag__divider} />
      <p className={styles.tag__text}>
        {label} {count && <span>{count}</span>} {afterLabel}
      </p>
    </div>
  );
}
