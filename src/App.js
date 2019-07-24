import React from "react";
import "./App.css";
import Display from "./components/Display";
import Panel from "./components/Panel";

function App() {
  return (
    <div className="App">
      <div className="main-display">
        <Display />
      </div>
      <div className="panel-container">
        <Panel type="add" />
        <Panel type="subtract" />
        <Panel type="multiply" />
        <Panel type="divide" />
      </div>
    </div>
  );
}

export default App;
