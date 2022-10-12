import { useState, useEffect } from "react";
// NOTE: This function name must start with use.
const useCounter = () => {
  // NOTE: If we use a custom hook in multiple components every component will receive its own state. So it's just a logic which has shared not the concrete state.
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // NOTE: You can return whatever you wanna return in your custom hooks. That could be an array or an object or a number or in this case implicitly a number because counter will hold a number.
  return counter;
};

export default useCounter;
