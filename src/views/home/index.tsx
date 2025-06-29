import styles from "./home.module.scss";
import { Separator } from "@/src/components/ui";
import { Defaults } from "@/src/components/layout";
import {
  CodeExamplesSection,
  HeroSection,
  PullSection,
  QuizSection,
  StatsSection,
} from "./segments";

export default function HomePage() {
  return (
    <Defaults className={styles.home}>
      <HeroSection />
      <StatsSection />
      <QuizSection />
      <Separator />
      <PullSection />
      <CodeExamplesSection />
    </Defaults>
  );
}
