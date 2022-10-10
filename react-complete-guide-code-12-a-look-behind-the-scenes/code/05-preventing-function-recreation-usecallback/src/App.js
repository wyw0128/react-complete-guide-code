// NOTE: Use Callback is a hook that allows us to basically store a function across component executions. So it allows us to tell React that we wanna save a function and that this function should not be recreated with every execution.

import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  // NOTE: useCallback expects two arguments, first is the function we want to store, second is an array of dependencies, the same as useEffect, anything you use in your function which is coming from the surrounding component so any state or props or context should be specified here.

  // NOTE: So therefore here we have an empty array of dependencies which basically tells React that this callback function this function here which we wanna store it in toggleParagraphHandler ultimately will never change that it has no dependencies and therefore always the same function object should be reused when the app component rerenders.
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
