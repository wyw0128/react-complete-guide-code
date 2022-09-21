import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      // NOTE: This is to set the type of button either as what we defined or as 'button'. If props.type is undefined, this button value will be used as a fallback type for the built in button.
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
