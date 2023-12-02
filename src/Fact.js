import Axios from "axios";
import { useReducer } from "react";
import { factReducer, initialState } from "./factReducer";
import { ACTION_TYPES } from "./facAction";

export const Fact = () => {
  const [state, dispatch] = useReducer(factReducer, initialState);
  const handelFetch = () => {
    dispatch({ type: ACTION_TYPES.Fetch_start });
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        dispatch({ type: ACTION_TYPES.fetch_success, date: res.date.fact });
        console.log(res);
      })
      .catch((error) => {
        dispatch({ type: ACTION_TYPES.fetch_error });
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
