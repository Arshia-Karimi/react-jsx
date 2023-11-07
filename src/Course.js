const Course = (props) => {
  return (
    <div
      style={{ border: props.course.isCompleted ? "1px solid white" : "blue" }}
    >
      <h1>{props.course.courseName}</h1>
      <button onClick={() => props.deleteCourse(props.course.id)}>x</button>
      <button
        onClick={() => props.completedCourse(props.course.id)}
        className="btn"
      >
        completed
      </button>
    </div>
  );
};
export default Course;
