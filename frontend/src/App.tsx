import React from "react";
import "./styles/main.scss";
import MoleGrid from "./components/MoleGrid/MoleGrid";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {
  return (
    <div className="App">
      <ScoreBoard />
      <MoleGrid />
    </div>
  );
}

export default App;
