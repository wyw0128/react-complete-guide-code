import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button RUNNING");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
// NOTE: This React.memo can work now because of the useCallback, it does something like: let obj1 = {}, let obj2 = {}, then obj1 = obj2, so that when you compare this obj1 and obj2 now, it will return true because now these two objects all stored in the same place in memory.
