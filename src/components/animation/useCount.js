import { useEffect, useState } from "react";

export const useCount = (start, end) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < end) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); // adjust the interval for the speed of counting

    return () => clearInterval(interval);
  }, [count, end]);
  return { count };
};
