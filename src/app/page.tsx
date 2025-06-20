import styles from "./page.module.css";
import Invitation from "@/components/Invitation";
import Date from "@/components/Date";
import Location from "@/components/Location";
import { ToastContainer } from "react-toastify";
import { Notice } from "@/components/Notice";
import Account from "@/components/Account";
import Gallary from "@/components/Gallary";
import Conver from "@/components/Conver";

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <main className={styles.main}>
        <Conver />
        <Invitation />
        <Date />
        <Location />
        <Notice />
        <Account />
        <Gallary />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
