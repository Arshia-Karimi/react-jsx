const Course = (props) => {
  return (
    <div>
      <h1>{props.Course.CourseName}</h1>
      <button onClick={() => props.deleteCourse(props.Course.id)}>x</button>
    </div>
  );
};
export default Course;
