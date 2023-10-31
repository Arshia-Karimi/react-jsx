import "./App.css";
import { useState } from "react";

function App() {
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    if (age < 5) {
      setAge(age + 1);
    }
  };
  const decreaseAge = () => {
    if (age > 0) {
      setAge(age - 1);
    }
  };
  const names = [
    { name: "html", finished: true },
    { name: "css", finished: false },
    { name: "javascript", finished: true },
    { name: "react", finished: false },
    { name: "python", finished: true },
  ];

  return (
    <div className="App">
      {names.map((a, b) => {
        return a.finished && <h2 key={b}>{a.name}</h2>;
      })}
      <h1>{age}</h1>
      <button className="btn" onClick={increaseAge}>
        Increase age +
      </button>
      <button className="btn" onClick={decreaseAge}>
        Increase age -
      </button>
    </div>
  );
}

export default App;
