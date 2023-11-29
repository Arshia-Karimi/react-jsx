import Axios from "axios";
import { useReducer } from "react";
import { factReducer, initialState } from "./factReducer";

export const Fact = () => {
  const [state, dispatch] = useReducer(factReducer, initialState);
  const handelFetch = () => {
    dispatch({ type: "fetch_start" });
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        dispatch({ type: "fetch_success", date: res.date.fact });
        console.log(res);
      })
      .catch((error) => {
        dispatch({ type: "fetch_error" });
        console.log(error);
      });
  };
  return (
    <div>
      <button className="btn" onClick={handelFetch}>
        {state.loading ? "is loading..." : "Fetch Cat Fact"}
      </button>
      {state.error && <p>Error, some thing is wrong</p>}
      <h1>{state.fact}</h1>
    </div>
  );
};
