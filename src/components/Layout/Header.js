import React, { Fragment } from "react";

import classes from "./Header.module.css";
//if we are using image as part of the softwware as a local image but not url then we import it
import mealsImage from "../../assets/meals.jpg";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Family Food</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes["main-image"]}>
        {/* locally calling image here */}
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
