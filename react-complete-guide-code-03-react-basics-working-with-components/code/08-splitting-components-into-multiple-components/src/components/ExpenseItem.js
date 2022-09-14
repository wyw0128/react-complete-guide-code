import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  console.log("props: ", props);
  return (
    <div className="expense-item">
      {/* NOTE: If there is no content between the opening and closing tags, you can also write it as a self-closing element like this: <ExpenseDate />. */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
