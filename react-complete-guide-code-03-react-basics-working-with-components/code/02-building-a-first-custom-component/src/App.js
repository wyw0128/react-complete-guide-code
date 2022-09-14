//  NOTE: In order to use this, we need to import the component
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* NOTE: Uppercase html tags are custom component wrote by other developers; only lowercase html tags are built-in tags. */}
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
