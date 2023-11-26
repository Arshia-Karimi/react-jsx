import React from "react";
import { useContext } from "react";
import { ProfileContext } from "../App";
import { useQuery } from "react-query";
import Axios from "axios";
export const Home = () => {
  const { username } = useContext(ProfileContext);
  const {
    date: catDate,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.date);
  });

  if (isLoading) return <h2>Loading ...</h2>;
  if (isError)
    return <h2>sorry , there was error : error : {error.message} </h2>;
  return (
    <div>
      <h1>home page - username is {username}</h1>
      <h1>{catDate?.fact}</h1>
      <button onClick={refetch}></button>
    </div>
  );
};
