import { useReducer } from "react";

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  NEW_USER_INPUT: "newUserInput",
  TG_COLOR: "tgColor"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 }
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 }
    case ACTION.TG_COLOR:
      return { ...state, color: !state.color }
    case ACTION.NEW_USER_INPUT:
      return { ...state, userInput: action.payload }
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, color: false, userInput: "" });


  return (
    <div className="App" style={{ color: state.color ? "#d1001f" : "#000137" }}>
      <input
        type="text"
        placeholder="type something..."
        value={state.userInput}
        onChange={(e) => dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })}
      />

      <p>{state.count}</p>

      <section>
        <button onClick={(() => dispatch({ type: ACTION.INCREMENT }))}>+</button>
        <button onClick={(() => dispatch({ type: ACTION.DECREMENT }))}>-</button>
        <button onClick={(() => dispatch({ type: ACTION.TG_COLOR }))}>Color</button>
      </section>

      <p>{state.userInput}</p>

    </div>
  );
}

export default App;
