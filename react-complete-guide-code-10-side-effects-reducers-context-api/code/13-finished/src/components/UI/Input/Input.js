import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";
// NOTE: In order to enable the first argument of useImperativeHandle here, we need to export our Component function in a special way. We need to wrap it with something special and that's coming from React, called forwardRef. And that is basically a function, a method which we execute, to which we parse our Component function.
// NOTE: With the useImperativeHandle and forwardRef, you can expose functionalities from a React Component to its parent Component to then use your Component in the parent Component through refs and trigger certain functionalities. That is something you can do. And that does not just work for functions, we could also expose the value through refs if we wanted to.
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };
  // NOTE: useImperativeHandle customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases. useImperativeHandle should be used with forwardRef.
  // NOTE: The second argument is basically a translation object between internal functionalities and the outside world, so the parent Component.
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
