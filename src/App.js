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

  const [showText, setShowText] = useState(true);

  const toggleText = () => {
    setShowText(!showText);
  };

  const [textColor, setTextColor] = useState(true);

  const [agee, setAgee] = useState(0);

  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const handelChange = (event) => {
    setNewCourse(event.target.value);
  };

  const addCourse = () => {
    setCourseList([...courseList, newCourse]);
  };

  const deleteCourse = (CourseName) => {
    setCourseList(courseList.filter((Course) => CourseName !== Course));
  };
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
          setTextColor(!textColor);
        }}
      >
        Click
      </button>
      <h1 className={textColor ? "redText" : "blueText"}>Odin Alfater</h1>
      <button
        className="btn"
        onClick={() => {
          if (agee < 10) {
            setAgee(agee + 1);
          }
        }}
      >
        increat +
      </button>

      <button className="btn" onClick={() => setAgee(0)}>
        set to 0
      </button>
      <button
        className="btn"
        onClick={() => {
          if (agee > 0) {
            setAgee(agee - 1);
          }
        }}
      >
        decreat -
      </button>
      {agee === 10 ? <p>حداکثر</p> : null}
      <h1>{agee}</h1>
      <hr />
      <div className="add-course">
        <input type="text" onChange={handelChange}></input>
        <button onClick={addCourse} className="btn">
          Add Course
        </button>
      </div>
      <div className="list">
        {courseList.map((Course) => {
          return (
            <div>
              <h1>{Course}</h1>
              <button onClick={() => deleteCourse(Course)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
