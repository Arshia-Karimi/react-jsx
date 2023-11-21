import React from "react";
import { useNavigate } from "react-router-dom";
export const About = () => {
  let navigate = useNavigate();
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
    </div>
  );
};