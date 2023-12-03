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
      return { ...state, [action.date.name]: action.date.value };
    case "add_tag":
      return { ...state, tags: [...state.tags, action.date] };

    case "remove_tag":
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.date),
      };

    case "increase":
      return { ...state, quantity: state.quantity + 1 };

    case "decrease":
      return { ...state, quantity: state.quantity - 1 };

    default:
      return state;
  }
};
