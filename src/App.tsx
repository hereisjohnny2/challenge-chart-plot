import { EventProvider } from "./contexts/EventContext";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <EventProvider>
      <Home />
    </EventProvider>
  );
}

export default App;
