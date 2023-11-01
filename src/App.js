import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    if (age < 2) {
      setAge(age + 1);
    }
  };

  const decreaseAge = () => {
    if (age > 0) {
      setAge(age - 1);
    }
  };

  const [inputValue, setInputValue] = useState("");

  const handelInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const names = [
    { name: "html", finished: true },
    { name: "css", finished: false },
    { name: "javascript", finished: true },
    { name: "react", finished: false },
    { name: "python", finished: true },
  ];

  const [showText, setShowTex] = useState(true);

  const toggleText = () => {
    setShowTex(!showText);
  };

  const [textColor, setTextColor] = useState("red");

  return (
    <div className="App">
      {names.map((a, b) => {
        return a.finished && <h2 key={b}>{a.name}</h2>;
      })}
      <h1 className={age < 2 ? "" : "red"}>{age}</h1>
      {age === 2 ? <p>حداکثر</p> : null}
      <button className="btn" onClick={increaseAge}>
        Increase age +
      </button>
      <button className={age > 0 ? "btn" : "none"} onClick={decreaseAge}>
        Increase age -
      </button>
      <br />
      <input type="text" onChange={handelInputChange}></input>
      <h1>{inputValue}</h1>
      <button className="btn" onClick={toggleText}>
        Click
      </button>
      {showText && <h1>Thor Odinson</h1>}

      <button
        className="btn"
        onClick={() => {
          setTextColor("blue");
        }}
      >
        Click
      </button>
      <h1 style={{ color: textColor }}>Odin Alfater</h1>
    </div>
  );
}

export default App;
