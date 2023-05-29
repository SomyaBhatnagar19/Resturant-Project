import React, { Fragment } from "react";

import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <Fragment>
      {/* Using the function send via App.js to the Header.js & then here to show cart by using the onClick feature */}
      <button className={classes.button} onClick={props.onDisplayCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
