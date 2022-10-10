import React from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};
// NOTE: It tells React that for this component, which it gets as a argument, React should look at the props this component gets and check the new value for all those props and compare it to the previous value those props got. And only if the value of a prop changed, the component should be re-executed and re-evaluated. And if the parent component changed but the prop values for that component here did not change, component execution will be skipped.
export default React.memo(DemoOutput);

// NOTE: React may look at props.show === props.previous.show, for primitive type of values, this could return true, but not for reference type of value.
