import React from "react";
import { useContext } from "react";
import { ProfileContext } from "../App";
import { useQuery } from "react-query";
export const Home = () => {
  const { username } = useContext(ProfileContext);
  const {} = useQuery(["cat"], () => {});
  return (
    <div>
      <h1>home page - username is {username}</h1>
    </div>
  );
};
