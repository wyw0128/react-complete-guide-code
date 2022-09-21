import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  // NOTE: With props, we now build a reusable card component which allows to pass other css classes later.
  // NOTE: Props.children will give us that content which has passed between the opening and closing tag of the card component.
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
