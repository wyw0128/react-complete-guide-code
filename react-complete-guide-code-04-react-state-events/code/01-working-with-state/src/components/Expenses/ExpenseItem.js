// NOTE: useState is a function provided by React library, it allows us to define the values as state.
// NOTE: If you have data and it might change, and where changes to that data should be reflected on the user interface, then state is needed.
import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}

  // NOTE: must use in a react component and should not be inside any nested functions.
  // NOTE: useState wants a default state value because once the default value changed, will lead the component be called again. useState returns an array, so we can use array destruction to extract separate values.
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* NOTE: We use on<event>, that is equivalent as adding an addEventListener to this button; and it needs a function as its value. Also we don't need to call this function.*/}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
