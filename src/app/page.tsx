import styles from "./page.module.css";
import Invitation from "@/components/Invitation";
import Date from "@/components/Date";
import Location from "@/components/Location";
import { ToastContainer } from "react-toastify";
import { Notice } from "@/components/Notice";
import Account from "@/components/Account";
import Gallary from "@/components/Gallary";
import Cover from "@/components/Cover";
import FadeInOnScroll from "@/components/common/FadeInOnScroll";

export default function Home() {
  return (
    <div
      style={{
        alignSelf: "center",
        margin: "0 calc(50% - 182.5px)",
        padding: "0 30px",
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ToastContainer />
      <main
        className={styles.main}
        style={{ display: "flex", flexDirection: "column", gap: "77px" }}
      >
        <FadeInOnScroll>
          <Cover />
        </FadeInOnScroll>
        <FadeInOnScroll delay={100}>
          <Invitation />
        </FadeInOnScroll>
        <FadeInOnScroll delay={200}>
          <Date />
        </FadeInOnScroll>
        <FadeInOnScroll delay={300}>
          <Location />
        </FadeInOnScroll>
        <FadeInOnScroll delay={400}>
          <Notice />
        </FadeInOnScroll>
        <FadeInOnScroll delay={500}>
          <Account />
        </FadeInOnScroll>
        <FadeInOnScroll delay={600}>
          <Gallary />
        </FadeInOnScroll>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
