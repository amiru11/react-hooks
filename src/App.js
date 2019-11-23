import React from "react";
import "./App.css";

import HookState from "./components/basic/UseState";
import HookEffect from "./components/basic/UseEffect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is HookState</p>
        <HookState initialValue="Hi" />
        <p>This is HookEffect</p>
        <HookEffect initialValue="Hello" />
      </header>
    </div>
  );
}

export default App;
