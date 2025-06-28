import styles from "./me.module.scss";
import Footer from "@/src/components/layout/footer";
import Header from "@/src/components/layout/header";
import HiItsMe from "@/src/components/pages/me/HiItsMe";
import { Separator } from "@/src/components/ui";
import AboutMe from "@/src/components/pages/me/AboutMe";
import ContactMe from "@/src/components/pages/me/ContactMe";

export default function MePage() {
  return (
    <>
      <Header />
      <main className={styles.me}>
        <HiItsMe />
        <Separator />
        <AboutMe />
        <Separator />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
