import Image from "next/image";
import styles from "./quiz.module.scss";
import { Icon } from "@/src/shared/ui/kit";
import Link from "next/link";
import clsx from "clsx";

export default function Quiz() {
  return (
    <section className={styles.quiz}>
      <Image
        src="/images/codeshow.png"
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

        <Link href="/quiz" className={clsx(styles.button, styles.button_text)}>
          Пройти квиз
          <Icon name="arrowRight" className={styles.button_icon} />
        </Link>
      </div>
    </section>
  );
}
