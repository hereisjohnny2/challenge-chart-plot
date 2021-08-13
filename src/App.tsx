import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { JSONDataProvider } from "./contexts/JSONDataContext";
import styles from "./styles/app.module.scss";

function App() {
  return (
    <JSONDataProvider>
      <div className={styles.appContainer}>
        <Header />
        <Main />
        <Footer />
      </div>
    </JSONDataProvider>
  );
}

export default App;
