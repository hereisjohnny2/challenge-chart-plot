import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <form>
        <section className="InputAreaContainer">
          <textarea name="" id=""></textarea>
        </section>
        <section className="ChartAreaContainer">

        </section>
        <footer>
          <button type="button">GENERATE CHART</button>
        </footer>
      </form>
    </div>
  );
}

export default App;
