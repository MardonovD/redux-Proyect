import React, { useState, useEffect } from "react";
import { compose, createStore } from "redux";
import redux from "./redux/redux";

const initialState = [
  {
    name: "doston",
    age: "20",
  },
];
function App() {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(initialState);
  });

  const personAction = (name, age) => {
    return {
      type: "ADD",
      payload: {
        name: name,
        age: age,
      },
    };
  };

  const personReducers = (state = initialState, action) => {
    if (action.type === "ADD") {
      return [...state, action.payload];
    }
    return state;
  };
  const newObj = personAction("oybek", 11);
  const store = createStore(personReducers);


  return (
    <div className="App">
      {/* <h1>Doston</h1>
      <h1>Natija:{state}</h1> */}
    </div>
  );
}

export default App;
