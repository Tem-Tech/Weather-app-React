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
              href="https://www.shecodes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leanne Oyeyemi
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Tem-Tech/weather-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://kind-noyce-0ae98f.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
            . Icons by
            <a
              className="links"
              href="https://github.com/basmilius"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              basmilius
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
