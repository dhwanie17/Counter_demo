import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [style, SetStyle] = useState({
    color: '#bdbdbd',
    cursor: 'not-allowed',
    backgroundcolor: '#ede7f6',
  });
  const IncNum = () => {
    if (style.color === '#bdbdbd') {
      SetStyle({
        color: '#f44336',
        background: 'ede7f6',
      });
    }
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 0) {
      SetStyle({
        color: '#bdbdbd',
        cursor: 'not-allowed',
        backgroundcolor: '#ede7f6',
      });
    }
  }, [count]);
  const DecNum = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
    SetStyle({
      color: '#bdbdbd',
      cursor: 'not-allowed',
      backgroundcolor: '#ede7f6',
    });
  };
  return (
    <div id="mainDiv">
      <div id="operation1">
        <button onClick={DecNum} id="sub" style={style} disabled={count === 0}>
          -
        </button>
        <div id="count">
          <div>{count}</div>
        </div>
        <button onClick={IncNum} id="add">
          +
        </button>
      </div>
      <div>
        <button onClick={reset} id="reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
