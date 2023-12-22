import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);  

  const handleStartStop = () => {
    setIsRunning((prevState) => !prevState); 
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isRunning) {
        setCount((prevCount) => prevCount + 1);  
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return (
    <>
      <h1>Timer App</h1>
      <h2>{count}</h2>
      <button onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button> 
      {count > 0 && <button onClick={() => setCount(0)}>Reset</button>}
    </>
  );
}

export default App;
