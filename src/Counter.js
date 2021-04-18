import React, { useState } from 'react';

export default function Counter({ appName, counterValue }) {
  const [counter, setCounter] = useState(counterValue);
  const [userInput, setUserInput] = useState(0);
  const [counterName, setCounterName] = useState(appName);

  return (
    <div>
      <input 
        onChange={(e) => setCounterName(e.target.value)}>
      </input>
      <h1>{counterName}</h1>
      <h2>{counter}</h2>
      <hr></hr>
      <input 
        onChange={(e) => setUserInput(Number(e.target.value))}>
      </input><br />
      <hr></hr>

      {/* INCREMENT BUTTON */}
      <button 
        onClick={() => setCounter((prevState) => prevState + userInput)}>
          Increment by {userInput}
      </button>
      <hr></hr>

      {counter <= 0 ? '' : 
        <button onClick={() => setCounter((prevState) => prevState - userInput)}
        >Decrement by {userInput}
        </button>
        }
      
      <hr></hr>
      <button 
        onClick={() => setCounter(0)}>
          Reset
      </button>
      <hr></hr>
    </div>
  );
}
