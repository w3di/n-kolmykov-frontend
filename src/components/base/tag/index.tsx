import styles from './tag.module.scss';

import { Icon } from '@/components/base';
import { IconName } from '@/components/base/icon';

interface TagProps {
  count?: string;
  label: string;
  afterLabel?: string;
  icon: IconName;
}

const Tag = ({ count, label, icon, afterLabel }: TagProps) => {
  return (
    <div className={styles.tag}>
      <Icon name={icon} className={styles.tag__bookIcon} />
      <hr className={styles.tag__divider} />
      <span className={styles.tag__text}>
        {label} {count && <span>{count}</span>} {afterLabel}
      </span>
    </div>
  );
};

export default Tag;
