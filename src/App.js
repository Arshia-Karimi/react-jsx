import { User } from "./User.js";
import "./App.css";

function App() {
  const users = [
    { name: "a", age: 23 },
    { name: "b", age: 33 },
    { name: "c", age: 31 },
  ];

  return (
    <div className="App">
      {users.map((user, index) => {
        return <User key={index} name={user.name} age={user.age} />;
      })}
    </div>
  );
}

export default App;
