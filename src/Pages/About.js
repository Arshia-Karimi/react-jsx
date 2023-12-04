import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../Stor.js";
import { useDispatch, useSelector } from "react-redux";

export const About = () => {
  let navigate = useNavigate();
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user);
  return (
    <div>
      <h1>This is About Page</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn"
      >
        Go To Home Page
      </button>
      <button
        onClick={() => {
          navigate("/contact");
        }}
        className="btn"
      >
        Go To Contact Page
      </button>

      <div className="App">
        <h1>Login {selector.userName}</h1>
        <input onChange={(event) => setNewUsername(event.target.value)} />
        <button
          className="btn"
          onClick={() => dispatch(login({ userName: newUsername }))}
        >
          Login
        </button>
        <button className="btn" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    </div>
  );
};
