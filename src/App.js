import "./App.css";

function App() {
  return (
    <div>
      <User name="Thor" age={22} email="arshia.karimi@email.com" />
      <Job salary={1000000000} position="developer" company="google" />
    </div>
  );
}

// const GetNaame = (name) => {
//   return name;
// };

// const props = {
//   name: "Thor",
//   age: 7,
//   email: "arshia.karimi@gmali.com"
// };

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h2>{props.position}</h2>
      <h3>{props.company}</h3>
    </div>
  );
};

export default App;
