import { useEffect, useState } from "react";

const Text = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("component did mount");

    return () => {
      console.log("component unmount");
    };
  }, []);

  useEffect(() => {
    console.log("component updated");
  }, [text]);

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <h1>{text}</h1>
    </div>
  );
};
export default Text;
