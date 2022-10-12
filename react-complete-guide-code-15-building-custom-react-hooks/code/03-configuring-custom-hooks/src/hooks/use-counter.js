import { useState, useEffect } from "react";
// NOTE: We can make the custom hooks reusable and configurable by accepting arguments, parameters. Here, we set the default value of forward argument to true.
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
    // NOTE: This forward is not defined inside of the EFFECT function, and it's not defined outside of our custom hook. Instead, it is a value that we get as a parameter, here, and we have to add it as a dependency, therefore.
  }, [forwards]);

  return counter;
};

export default useCounter;
