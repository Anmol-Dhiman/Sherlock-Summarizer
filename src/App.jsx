import { useState } from "react";
import "./App.css";

import { Header, Search } from "./components";
import TextSearch from "./components/TextSearch";

const App = () => {
  // const [selectedNav, setSelectedNav] = useState("URL");
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Header />
        {/* <Search /> */}
        <TextSearch />
      </div>
    </main>
  );
};

export default App;
