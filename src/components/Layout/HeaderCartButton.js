// import { useState } from "react";

import {useContext} from 'react';

import React, { Fragment } from "react";

import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {

  // the header cart btn will be reevaluated by react when ever context to the cart context changes
  const cartCtx = useContext(CartContext);

  // to count no of items in cart
  const TotalItemsInCart = cartCtx.item.reduce((curNumber, item)=>{ return curNumber + item.amount}, 0);

  return (
    <Fragment>
      {/* Using the function send via App.js to the Header.js & then here to show cart by using the onClick feature */}
      <button className={classes.button} onClick={props.onDisplayCart}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{TotalItemsInCart}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
