export const initialState = {
  loading: false,
  fact: "",
  error: false,
};
export const factReducer = (state, action) => {
  if (action.type === "Fetch_start")
    return { loading: true, fact: "", error: false };
  if (action.type === "Fetch_success")
    return { loading: false, fact: action.date, error: false };
  if (action.type === "Fetch_error")
    return { loading: true, fact: "", error: true };
};
