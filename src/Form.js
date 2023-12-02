import { useReducer } from "react";
import { fromReducer, initialState } from "./formReducer";

export const From = () => {
  const [state, dispatch] = useReducer(fromReducer, initialState);
  return (
    <div>
      <form>
        <input type="text" placeholder="عنوان" />
        <br />
        <br />
        <input type="text" placeholder="وتضیح" />
        <br />
        <br />
        <input type="text" placeholder="قسمت" />
        <br />
        <br />
        <p>مجموع</p>
        <select>
          <option value="bag">کیف</option>
          <option value="shoes">کفش</option>
          <option value="dress">لیاس</option>
        </select>
        <p>تک</p>
        <textarea placeholder="tags"></textarea>
        <br />
        <button type="button">انتخاب تک</button>
        {initialState.tags.map((tag) => {
          <button key={tag}>{tag}</button>;
        })}
        <div style={{ marginTop: "20px" }}>
          <button className="btn" type="button">
            +
          </button>
          تعداد {initialState.quantity}
          <button className="btn" type="button">
            -
          </button>
        </div>
      </form>
      <br />
    </div>
  );
};
