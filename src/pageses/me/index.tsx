import styles from "./me.module.scss";
import Footer from "@/src/components/layout/footer";
import Header from "@/src/components/layout/header";
import HiItsMe from "@/src/components/pages/me/HiItsMe";
import { Separator } from "@/src/components/ui";
import AboutMe from "@/src/components/pages/me/AboutMe";
import ContactMe from "@/src/components/pages/me/ContactMe";
import MySkills from "@/src/components/pages/me/MySkills";
import MyStack from "@/src/components/pages/me/MyStack";

export default function MePage() {
  return (
    <>
      <Header />
      <main className={styles.me}>
        <HiItsMe />
        <Separator />
        <AboutMe />
        <Separator />
        <MySkills />
        <Separator />
        <MyStack />
        <Separator />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
}
