import { useReducer, useRef } from "react";
import { fromReducer, initialState } from "./formReducer";

export const From = () => {
  const [state, dispatch] = useReducer(fromReducer, initialState);
  const handelInputChange = (event) => {
    dispatch({
      type: "change_input",
      date: { name: event.target.name, value: event.target.value },
    });
  };
  console.log(state);
  const tagRef = useRef();

  const handelTags = () => {
    const tags = tagRef.current.value.split(",");
    tags.forEach((t) => {
      dispatch({ type: "add_tag", date: t });
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="عنوان"
          name="title"
          onChange={handelInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="وتضیح"
          name="description"
          onChange={handelInputChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="قسمت"
          name="price"
          onChange={handelInputChange}
        />
        <br />
        <br />
        <p>مجموع</p>
        <select name="category" onChange={handelInputChange}>
          <option value="bag">کیف</option>
          <option value="shoes">کفش</option>
          <option value="dress">لیاس</option>
        </select>
        <p>تک</p>
        <textarea placeholder="tags" ref={tagRef}></textarea>
        <br />
        <button className="btn" type="button" onClick={handelTags}>
          انتخاب تک
        </button>
        <br />
        {state.tags.map((tag) => {
          return (
            <button
              className="btn"
              key={tag}
              onClick={() => dispatch({ type: "remove_tag", date: tag })}
            >
              {tag}
            </button>
          );
        })}
        <div style={{ marginTop: "20px" }}>
          <button
            className="btn"
            type="button"
            onClick={() => dispatch({ type: "increase" })}
          >
            +
          </button>
          تعداد {state.quantity}
          <button
            className="btn"
            type="button"
            onClick={() => dispatch({ type: "decrease" })}
          >
            -
          </button>
        </div>
      </form>
      <br />
    </div>
  );
};
