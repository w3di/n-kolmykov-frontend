import styles from "./hero.module.scss";
import { Icon, CollectionBlock } from "@/src/shared/ui/kit";
import clsx from "clsx";
import { AnimatedGrid } from "./ui/animated-grid";
const technologies = [
  {
    id: "frontend",
    icon: "react" as const,
    label: "Frontend",
    className: "",
  },
  {
    id: "mobile",
    icon: "expo" as const,
    label: "Mobile",
    className: "",
  },
  {
    id: "backend",
    icon: "graph" as const,
    label: "Backend",
    className: styles.frameworksBlock__item__frameworksIcon__backend,
  },
];
export default function Hero() {
  return (
    <section className={styles.hero}>
      <AnimatedGrid>
        <div className={styles.contentWrapper}>
          <CollectionBlock
            count="100+"
            label="База"
            icon="book"
            afterLabel="вопросов"
          />
          <h1 className={styles.textBlock__title}>Привет, разработчик!</h1>
          <p className={styles.textBlock__description}>
            Open-source проект для подготовки к техническим собеседованиям.{" "}
            <br className={styles.textBlock__description__br} />
            Коллекция актуальных вопросов и развернутых ответов по популярным{" "}
            <br className={styles.textBlock__description__br} />
            технологиям. Повышай свои знания и уверенность перед интервью.
          </p>
          <ul className={styles.frameworksBlock}>
            {technologies.map((tech) => (
              <li key={tech.id} className={styles.frameworksBlock__item}>
                <Icon
                  name={tech.icon}
                  className={clsx(
                    styles.frameworksBlock__item__frameworksIcon,
                    tech.className
                  )}
                />
                <p className={styles.frameworksBlock__item__text}>
                  <span>{tech.label}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedGrid>
    </section>
  );
}
