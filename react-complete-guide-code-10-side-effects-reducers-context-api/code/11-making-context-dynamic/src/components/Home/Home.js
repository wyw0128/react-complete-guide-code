import React from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      {/* NOTE: This is a pure presentational component. I don't wanna use context inside of my Button to always bind Button onClicks to onLogout because whilst this would remove the need to pass onLogout like this, it would also mean that our Button is now always logging the user out and not able to do anything else upon a click.*/}
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
