import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={handleClick}>click me</button>
      <h3>Count: {count}</h3>
    </div>
  );
}

export default App;
