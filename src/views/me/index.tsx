import { Defaults } from "@/src/components/layout";
import styles from "./me.module.scss";

import { Separator } from "@/src/components/ui";
import { HiItsMe, AboutMe, MySkills, MyStack, ContactMe } from "./segments";

export default function MePage() {
  return (
    <Defaults className={styles.me}>
      <HiItsMe />
      <Separator />
      <AboutMe />
      <Separator />
      <MySkills />
      <Separator />
      <MyStack />
      <Separator />
      <ContactMe />
    </Defaults>
  );
}
