import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import SearchBar from "./components/search";

function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar />
      </div>
    </Router>
  );
}

export default App;
