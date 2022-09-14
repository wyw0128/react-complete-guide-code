function ExpenseItem() {
  // NOTE: There is one important rule, regarding this HTML, this JSX code which you return, inside of a component. You must only have, one root element, per return statement or per JSX code snippet. We can work around it by wrapping these into another div, regarding to readability, we can also wrap these all in brackets.
  return (
    <div>
      <div>March 28th 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
