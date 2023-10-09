import React from "react";
import "./App.css";
import Dice from "components/Dice";

function App() {
  const turnCount: number | undefined =
    process.env.REACT_APP_TURN_COUNT === undefined
      ? process.env.REACT_APP_TURN_COUNT
      : +process.env.REACT_APP_TURN_COUNT;
  const resultTimeout: number | undefined =
    process.env.REACT_APP_RESULT_TIMEOUT === undefined
      ? process.env.REACT_APP_RESULT_TIMEOUT
      : +process.env.REACT_APP_RESULT_TIMEOUT;

  return (
    <div className="App">
      <Dice turnCount={turnCount} resultTimeout={resultTimeout} />
    </div>
  );
}

export default App;
