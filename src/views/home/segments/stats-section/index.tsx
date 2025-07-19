import Icon from "@/src/components/ui/icon";
import styles from "./stats-section.module.scss";

const stats = [
  {
    icon: "listBullets" as const,
    text: "вопросов",
    count: "100+",
  },
  {
    icon: "network" as const,
    text: "тем",
    count: "20+",
  },
  {
    icon: "clockCountdown" as const,
    text: "часов изучения",
    count: "500+",
  },
];

export default function StatsSection() {
  return (
    <ul className={styles.statsSection}>
      {stats.map((item) => (
        <li key={item.text}>
          <Icon name={item.icon} className={styles.icon} />
          <div className={styles.wrapper}>
            <p className={styles.text}>{item.text}</p>
            <p className={styles.countText}>{item.count}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
