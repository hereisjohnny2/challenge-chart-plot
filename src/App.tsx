import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { EventProvider } from "./contexts/EventContext";
import styles from "./styles/app.module.scss";

function App() {
  return (
    <EventProvider>
      <div className={styles.appContainer}>
        <Header />
        <Main />
        <Footer />
      </div>
    </EventProvider>
  );
}

export default App;
