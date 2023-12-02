export const initialState = {
  title: "",
  description: "",
  price: 0,
  category: "",
  tags: [],
  quantity: 0,
};

export const fromReducer = (state, action) => {
  switch (action.type) {
    case "change_input":
      return state;

    case "add_tag":
      return state;

    case "remove_tag":
      return state;

    case "increase":
      return state;

    case "decrease":
      return state;

    default:
      return state;
  }
};
