import Icon, { IconName } from "@/src/components/ui/Icon";
import styles from "./collectionBlock.module.scss";

interface CollectionBlockProps {
  count?: string;
  label: string;
  afterLabel?: string;
  icon: IconName;
}

export default function CollectionBlock({
  count,
  label,
  icon,
  afterLabel,
}: CollectionBlockProps) {
  return (
    <div className={styles.collectionBlock}>
      <Icon name={icon} className={styles.collectionBlock__bookIcon} />
      <hr className={styles.collectionBlock__divider} />
      <p className={styles.collectionBlock__text}>
        {label} {count && <span>{count}</span>} {afterLabel}
      </p>
    </div>
  );
}
