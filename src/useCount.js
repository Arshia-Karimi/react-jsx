import { useState } from "react";

export const useCount = (intial = 0) => {
  const [count, setCount] = useState(intial);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };
  return { count, increase, decrease, reset };
};
