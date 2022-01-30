import "./style.css";
import Search from "./search";
import ForecastRow from "./predictions";
import Heading from "./heading";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <Heading />
        <Search />
        <br />
        <hr size="" />
        <h3>This week...</h3>
        <div>
          <ForecastRow />
        </div>
        <hr />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/Tem-Tech/weather-app-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leanne Oyeyemi
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
