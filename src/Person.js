import propTypes from "prop-types";

export const Person = (props) => {
  return (
    <div className="App">
      <h1>Name : {props.Name}</h1>
      <h2>Email : {props.email}</h2>
      <h3>Age : {props.age}</h3>
      <h3>Married : {props.isMarried ? "yes" : "No"}</h3>
      {props.courses.map((course) => {
        <h4 key={course}>{course}</h4>;
      })}
    </div>
  );
};
Person.propTypes = {
  Name: propTypes.string,
  email: propTypes.string,
  age: propTypes.number,
  isMarried: propTypes.bool,
  course: propTypes.arrayOf(propTypes.string),
};
