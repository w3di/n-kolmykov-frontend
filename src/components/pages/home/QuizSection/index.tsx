import Image from "next/image";
import styles from "./quizSection.module.scss";
import Button from "@/src/components/ui/button";

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
        <Image
          src="/expo.svg"
          alt="arrow_right"
          width={36}
          height={36}
          className={styles.blurBlock_icon}
        />
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
