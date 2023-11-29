import { useEffect, useState, createContext } from "react";
import "./App.css";
import Axios from "axios";
import Course from "./Course.js";
import Text from "./Text.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Pages/Home.js";
import { About } from "./Pages/About.js";
import { Contact } from "./Pages/Contact.js";
import { Nav } from "./Pages/Nav.js";
import { Profile } from "./Pages/Profile.js";
import { QueryClient, QueryClientProvider } from "react-query";
import SubmitFrom from "./Components/submitForm.js";
import { useToggle } from "./useToggle.js";
import { Cat } from "./Cat.js";
import { useCount } from "./useCount.js";
import { Fact } from "./Fact.js";

export const ProfileContext = createContext();

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
    const course = {
      id:
        courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
      courseName: newCourse,
      isCompleted: false,
    };
    setCourseList([...courseList, course]);
  };

  const deleteCourse = (CourseId) => {
    setCourseList(courseList.filter((Course) => CourseId !== Course.id));
  };

  const completedCourse = (courseId) => {
    const newCourseList = courseList.map((course) => {
      if (course.id === courseId)
        return { ...course, isCompleted: !course.isCompleted };
      else return course;
    });
    setCourseList(newCourseList);
    console.log(newCourse);
  };

  const [showTextt, setShowTextt] = useState(false);

  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.date);
      setCatFact(res.data.fact);
    });
  };
  const [name, setName] = useState("");
  const [predicteResult, setPredicteResult] = useState({});
  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredicteResult(res.data);
    });
  };

  const [generateExcuse, setGenerageExcuse] = useState("");
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
      (res) => {
        setGenerageExcuse(res.data[0].excuse);
      }
    );
  };

  const [username, setUsername] = useState("Bruce");

  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  const [isVisible, toggle] = useToggle();
  const { count, increase, decrease, reset } = useCount();
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
        <input type="text" onChange={(event) => handelChange(event)} />
        <button onClick={addCourse} className="btn dex">
          Add Course
        </button>
      </div>
      <div className="list">
        {courseList.map((course, index) => {
          return (
            <Course
              key={index}
              course={course}
              deleteCourse={deleteCourse}
              completedCourse={completedCourse}
            />
          );
        })}
      </div>
      <button className="btn bttn" onClick={() => setShowTextt(!showTextt)}>
        show Text
      </button>
      {showTextt && <Text />}
      <br />
      <button className="btn" onClick={fetchFact}>
        fetch date
      </button>
      <p>{catFact}</p>
      <input
        placeholder="Thor Odin..."
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={fetchAge} className="btn">
        Predict age
      </button>
      <h1>age is : {predicteResult?.age}</h1>
      <h1>name is : {predicteResult?.name}</h1>
      <h1>Generate an excuse</h1>
      <button className="btn" onClick={() => fetchExcuse("party")}>
        party
      </button>
      <button className="btn" onClick={() => fetchExcuse("family")}>
        family
      </button>
      <button className="btn" onClick={() => fetchExcuse("office")}>
        office
      </button>
      <p>{generateExcuse}</p>
      <QueryClientProvider client={client}>
        <ProfileContext.Provider value={{ username, setUsername }}>
          <Router>
            <div>Cars</div>
            <Nav />
            <Routes>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/profile/:name/:id"
                element={
                  <Profile username={username} setUsername={setUsername} />
                }
              />
              <Route path="*" element={<h1>Not Fount</h1>} />
            </Routes>
            <Link></Link>
          </Router>
        </ProfileContext.Provider>
      </QueryClientProvider>
      <hr />
      <br />
      <SubmitFrom />
      <br />
      <button className="btn" onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h1>This is my hidden text</h1>}
      <Cat />
      {count}
      <button className="btn" onClick={increase}>
        +
      </button>
      <button className="btn" onClick={decrease}>
        -
      </button>
      <button className="btn" onClick={reset}>
        reset
      </button>
      <Fact />
    </div>
  );
}

export default App;
