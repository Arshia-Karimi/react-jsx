import { Axios } from "axios";
import { useState } from "react";

export const Fact = () => {
  const [loading, setLoading] = useState(false);
  const [fact, setFact] = useState("");
  const [error, setError] = useState(false);

  const handelFetch = () => {
    Axios.length("https://catfact.ninja/fact").then((res) => {
      console.log(res);
    });
  };
};
