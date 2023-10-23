import React, { useState } from "react";
import "./App.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">Welcome!</div>
      <div className="nav-links">
        <a href="/" className="link">
          Home
        </a>
        <a href="/counter-app-1" className="link">
          Counter App 1
        </a>
        <a href="/counter-app-2" className="link">
          Counter App 2
        </a>
      </div>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <div className="counter-buttons">
        <div className="counter-display">{count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Counter />
    </div>
  );
};

export default App;
