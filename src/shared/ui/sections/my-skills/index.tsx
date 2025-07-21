import { Icon } from "@/src/shared/ui/kit";
import styles from "./my-skills.module.scss";
import clsx from "clsx";
import { Squares } from "./ui";

const skillsData = [
  {
    id: 1,
    icon: "pcBlack",
    colorVariant: "white",
    text: "Разработка высоконагруженных веб-интерфейсов",
    borderColor: "rgba(226, 226, 226, 1)",
    hoverFillColor: "rgba(240, 240, 240, 1)",
  },
  {
    id: 2,
    icon: "pcOrange",
    colorVariant: "orange",
    text: "Создание архитектуры и оптимизации",
    borderColor: "rgba(255, 232, 224, 1)",
    hoverFillColor: "rgba(255, 232, 224, 1)",
  },
  {
    id: 3,
    icon: "phoneBlue",
    colorVariant: "blue",
    text: "Разработка мобильных приложений",
    borderColor: "rgba(217, 241, 249, 1)",
    hoverFillColor: "rgba(217, 241, 249, 1)",
  },
  {
    id: 4,
    icon: "tagGreen",
    colorVariant: "green",
    text: "Разработка CI/DC пайплайнов",
    borderColor: "rgba(215, 249, 235, 1)",
    hoverFillColor: "rgba(215, 249, 235, 1)",
  },
] as const;

export default function MySkills() {
  return (
    <section className={styles.mySkills}>
      <p className={styles.title}>
        <strong>FullStack Evolution:</strong> от интерфейсов до инфраструктуры
      </p>
      <ul className={styles.squaresList}>
        {skillsData.map((skill) => (
          <li key={skill.id}>
            <div className={styles.squaresList__item}>
              <div
                className={clsx(
                  styles.squaresList__item__iconWrapper,
                  styles[`squaresList__item__iconWrapper_${skill.colorVariant}`]
                )}
              >
                <Icon
                  name={skill.icon}
                  className={styles.squaresList__item__icon}
                />
              </div>
              <Squares
                speed={0.1}
                squareSize={40}
                direction="diagonal"
                borderColor={skill.borderColor}
                hoverFillColor={skill.hoverFillColor}
                borderStyle="dashed"
                dashPattern={[8, 4]}
                className={clsx(
                  styles.squaresList__item__background,
                  styles[`squaresList__item__background_${skill.colorVariant}`]
                )}
              />
            </div>
            <div className={styles.squaresList__textItem}>
              <p className={styles.squaresList__textItem__text}>{skill.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
