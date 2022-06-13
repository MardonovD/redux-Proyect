import React, { useState, useEffect } from "react";
import { compose } from "redux";

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    setState(natija);
  }, [state]);
  const kup = (num) => {
    return num * 2;
  };
  const ayir = (num) => {
    return num - 2;
  };
  const qush = (num) => {
    return num + 2;
  };
  const mixFunc = compose(qush, ayir, kup);
  const natija = mixFunc(30);
  console.log(natija);

  return (
    <div className="App">
      <h1>Doston</h1>
      <h1>Natija:{state}</h1>
    </div>
  );
}

export default App;
