import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <div>
        <small>
          <a>Open-sourced code</a> by{" "}
          <a href="https://github.com/BeeMao03">Mariel Buzarquis</a> hosted on{" "}
          <a>Netlify</a>
        </small>
      </div>
    </div>
  );
}

export default App;
