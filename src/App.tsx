import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { EventProvider } from "./contexts/EventContext";
import styles from "./styles/app.module.scss";
import { ErrorModal } from "./components/ErrorModal";
import { useEvent } from "./services/hooks/useEvent";

function App() {
  const { errorMessage } = useEvent();

  return (
    <EventProvider>
      <ErrorModal />
      <div className={styles.appContainer}>
        <Header />
        <Main />
        <Footer />
      </div>
    </EventProvider>
  );
}

export default App;
