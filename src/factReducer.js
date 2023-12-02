import { ACTION_TYPES } from "./facAction";

export const initialState = {
  loading: false,
  fact: "",
  error: false,
};
export const factReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.Fetch_start:
      return { loading: true, fact: "", error: false };
    case ACTION_TYPES.fetch_success:
      return { loading: false, fact: action.date, error: false };
    case ACTION_TYPES.fetch_error:
      return { loading: false, fact: "", error: true };
    default:
      return state;
  }
};
