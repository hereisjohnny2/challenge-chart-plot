import { ErrorModal } from "../../components/ErrorModal";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

import styles from "./styles.module.scss";

export function Home() {
  return (
    <>
      <ErrorModal />
      <div className={styles.appContainer}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}