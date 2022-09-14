import "./Card.css";
// NOTE: It's like a convention, when naming card it means some kind of container look with round corner, drop shadows, and with elements.
function Card(props) {
  // NOTE: String concat in order to add more than one class names.
  const classes = "card " + props.className;
  // console.log("card props", classes);
  // NOTE: Allow the consumers to pass in and add custom class name.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
