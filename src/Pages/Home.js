import React from "react";
import { useContext } from "react";
import { ProfileContext } from "../App";
export const Home = () => {
  const { username } = useContext(ProfileContext);
  return (
    <div>
      <h1>home page - username is {username}</h1>
    </div>
  );
};
