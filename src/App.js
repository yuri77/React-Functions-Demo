import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Panel from "./components/Panel";

// Everything that has the <Display /> component rendered needs state, as the job of <Display /> is to show the user the current value which is stored in state.

function App() {
  const [count, setCount] = useState(0);

  const add = value => {
    setCount(count + value);
  };
  const sub = value => {
    setCount(count - value);
  };
  const multiply = value => {
    setCount(count * value);
  };

  const divide = value => {
    setCount(count / value);
  };

  return (
    <div className="App">
      <div className="main-display">
        <Display value={count} />
      </div>
      <div className="panel-container">
        {/* Each Panel will perform a specific operation to update the main display.  Pass each Panel a unique function to perform the appropriate operation. HINT: Functions need to be defined inside the App function but outside the return. */}
        <Panel type="add" math={add} />
        <Panel type="subtract" math={sub} />
        <Panel type="multiply" math={multiply} />
        <Panel type="divide" math={divide} />
      </div>
    </div>
  );
}

export default App;
