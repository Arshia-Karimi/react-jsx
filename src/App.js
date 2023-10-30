import "./App.css";

function App() {
  const age = 20;

  return (
    <div className="App">
      {age > 20 ? <h1>over</h1> : <h1>under</h1>}

      {age === 20 && <h1>age is 20</h1>}

      <button type="submit" style={{ fontSize: age > 20 ? "20px" : "30px" }}>
        click me
      </button>
    </div>
  );
}

export default App;
