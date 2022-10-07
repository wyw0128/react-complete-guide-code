import React from "react";
import { Fragment } from "react";
import CartButton from "./CartButton";
// NOTE: When using img in react, the best ways is to import this img first and then plug into 'src' if you want reuse this img.
import headerImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="A table with delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
