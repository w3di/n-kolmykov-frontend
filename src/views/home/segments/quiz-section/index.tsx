import Image from "next/image";
import styles from "./quiz-section.module.scss";
import Button from "@/src/components/ui/button";
import Icon from "@/src/components/ui/icon";

export default function QuizSection() {
  return (
    <section className={styles.quizSection}>
      <Image
        src="/codeshow.png"
        alt="code_show"
        width={1016}
        height={635}
        className={styles.codeShowImage}
      />
      <div className={styles.blurBlock}>
        <Icon name="lightning" className={styles.blurBlock_icon} />

        <p className={styles.blurBlock_text}>
          Проверьте свои знания,{" "}
          <span>
            пройдя
            <br />
            интерактивный квиз
          </span>
        </p>
        <Button />
      </div>
    </section>
  );
}
