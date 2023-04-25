import { useState } from "react";
import "./App.css";

import { Header, Search } from "./components";
import TextSearch from "./components/TextSearch";

const App = () => {
  // const [selectedNav, setSelectedNav] = useState("URL");
  const [selected, setSelectedType] = useState("text");

  const [text, setTextFocus] = useState(true);
  const [url, setUrlFocus] = useState(false);

  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Header />

        <div className="flex w-full flex-row mt-5 justify-center font-bold  text-2xl holder ">
          <p
            className="mr-32 text "
            type="button"
            onClick={() => {
              setSelectedType("text");
            }}
          >
            TEXT
          </p>
          <p
            className="ml-32 url"
            onClick={() => {
              setSelectedType("url");
            }}
          >
            URL
          </p>
        </div>
        {selected === "text" ? <TextSearch /> : <Search />}
      </div>
    </main>
  );
};

export default App;
