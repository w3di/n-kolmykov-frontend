import styles from "./home.module.scss";
import HeroSection from "@/src/components/pages/home/HeroSection";
import StatsSection from "@/src/components/pages/home/StatsSection";
import QuizSection from "@/src/components/pages/home/QuizSection";
import PullSection from "@/src/components/pages/home/PullSection";
import CodeExamplesSection from "@/src/components/pages/home/CodeExamplesSection";
import Footer from "@/src/components/layout/footer";
import Header from "@/src/components/layout/header";
import { Separator } from "@/src/components/ui";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.home}>
        <HeroSection />
        <StatsSection />
        <QuizSection />
        <Separator />
        <PullSection />
        <CodeExamplesSection />
        <Footer />
      </main>
    </>
  );
}
