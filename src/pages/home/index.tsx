import styles from "./home.module.scss";
import HeroSection from "@/src/components/pages/home/HeroSection";
import StatsSection from "@/src/components/pages/home/StatsSection";
import QuizSection from "@/src/components/pages/home/QuizSection";
import PullSection from "@/src/components/pages/home/PullSection";

export default function HomePage() {
  return (
    <main className={styles.home}>
      <HeroSection />
      <StatsSection />
      <QuizSection />
      <PullSection />
    </main>
  );
}
