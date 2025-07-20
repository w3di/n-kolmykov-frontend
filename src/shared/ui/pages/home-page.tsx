import styles from "./home.module.scss";
import { Separator } from "@/src/shared/ui/kit";
import { Defaults } from "@/src/shared/ui/layout";
import Hero from "../sections/hero";
import Stats from "../sections/stats";
import Quiz from "../sections/quiz";
import Pull from "../sections/pull";
import CodeExamples from "../sections/code-examples";

export function HomePage() {
  return (
    <Defaults className={styles.home}>
      <Hero />
      <Stats />
      <Quiz />
      <Separator />
      <Pull />
      <CodeExamples />
    </Defaults>
  );
}
