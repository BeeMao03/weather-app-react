import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <div>
        <br />
        <small>
          <a href="https://github.com/BeeMao03/weather-app-react">
            Open-sourced code
          </a>{" "}
          by <a href="https://github.com/BeeMao03">Mariel Buzarquis</a> hosted
          on <a href="https://loquacious-sorbet-47ac4a.netlify.app/">Netlify</a>
        </small>
      </div>
    </div>
  );
}

export default App;
