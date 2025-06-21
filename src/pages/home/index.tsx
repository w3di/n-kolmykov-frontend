import Image from "next/image";
import styles from "./home.module.scss";
import HomeBlock1 from "@/src/components/pages/home/Block_1";

export default function HomePage() {
  return (
    <main className={styles.home}>
      <HomeBlock1 />
    </main>
  );
}
