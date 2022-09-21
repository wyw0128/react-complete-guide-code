import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  // console.log("🚀 ~ file: Button.js ~ line 4 ~ styles", styles);
  return (
    // NOTE: This button component is a general component, so it has onClick property. But when it was used inside a form, there is no need to use onClick because form is special.
    // NOTE: The button element has a default type of submit. You can make it do nothing by setting a type of 'button'.
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
