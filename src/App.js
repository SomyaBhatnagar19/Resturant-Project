import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";

import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hidecartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {/* here by the help of the true or false value of cartIsShown variable we check weather to open the cart or not */}
      {/* also to make the cart closable on clicking the close button we make a custom function that sends this and points to the Cart component & also closes the BackDrop */}
      {cartIsShown && <Cart onCloseCart = {hidecartHandler}/> }
      {/* below to operate the cart we use a custom function that points to the showCartHandler function gives the value to the header component button */}
      <Header onShowCart = {showCartHandler} />
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
