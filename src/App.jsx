import "./App.css";

import { Header, Search } from "./components";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Header />
        <Search />
      </div>
    </main>
  );
};

export default App;
