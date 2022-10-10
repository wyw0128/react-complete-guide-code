import React, { useState } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* NOTE: All those js elements here in the end are like function calls to the respect of component functions. So we call the function for the DemoOutput component. We call the function for the button component. That's why those child components are also re-executed and re-evaluated just because the parent component changed because they are part of the parent components, function body. And if the parent component function runs again of course the child component functions also run again. */}
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
