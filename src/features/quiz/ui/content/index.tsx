import { QuestionType } from "../..";
import styles from "./content.module.scss";
import { AnswerAccordion } from "./ui";
import { Button, Icon } from "@/src/shared/ui/kit";

export default function Content({
  questionData,
  currentStep,
  onAnswerClick,
  quizStats,
}: {
  questionData: QuestionType[];
  currentStep: number;
  onAnswerClick: (id: number, answer: "know" | "unknown") => void;
  quizStats: { know: number; unknown: number };
}) {
  return (
    <section className={styles.content}>
      <div className={styles.quistionContainer}>
        <div className={styles.quistionContainer__header}>
          <Icon
            name="lightning"
            className={styles.quistionContainer__header__icon}
          />
          <span className={styles.quistionContainer__header__text}>
            {questionData[currentStep].theme}
          </span>
        </div>
        <p className={styles.quistionContainer__question}>
          {questionData[currentStep].question}
        </p>
        <AnswerAccordion answer={questionData[currentStep].answer} />

        <div className={styles.quistionContainer__buttonsContainer}>
          <Button
            variant="black"
            label="Знаю"
            onClick={() => onAnswerClick(currentStep, "know")}
          />
          <Button
            variant="white"
            label="Не знаю"
            onClick={() => onAnswerClick(currentStep, "unknown")}
          />
        </div>
      </div>
      <div className={styles.statsBarContainer}>
        <div className={styles.statsBarContainer__title}>Статистика</div>
        <ul className={styles.statsBar}>
          <li className={styles.statsBar__item}>
            <p className={styles.statsBar__item__number}>{quizStats.unknown}</p>
            <p className={styles.statsBar__item__text}>Не знаю</p>
          </li>
          <li className={styles.statsBar__item}>
            <p className={styles.statsBar__item__number}>{quizStats.know}</p>
            <p className={styles.statsBar__item__text}>Знаю</p>
          </li>
          <li className={styles.statsBar__item}>
            <p className={styles.statsBar__item__number}>
              {quizStats.know + quizStats.unknown}
            </p>
            <p className={styles.statsBar__item__text}>Всего</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
