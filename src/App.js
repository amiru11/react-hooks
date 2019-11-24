import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HookState from "./components/basic/UseState";
import HookEffect from "./components/basic/UseEffect";
import {
  HookReducerOne,
  HookReducerTwo
} from "./components/additional/UseReducer";
import HookMemo from "./components/additional/UseMemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React-Hook Practice</h2>
        <img className="App-logo" src={logo} alt="logo" />
        <h2>This is HookState</h2>
        <HookState initialValue="Hi" />
        <h2>This is HookEffect</h2>
        <HookEffect initialValue="Hello" />
        <h2>This is HookReducer For Basic</h2>
        <HookReducerOne />
        <h2>This is HookReducer For Input Control</h2>
        <HookReducerTwo />
        <h2>This is HookMemo</h2>
        <HookMemo />
      </header>
    </div>
  );
}

export default App;
