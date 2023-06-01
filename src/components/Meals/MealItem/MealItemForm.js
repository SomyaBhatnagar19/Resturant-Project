import classes from "./MealItemForm.module.css";

import Input from "../../UI/Input";

import { useState, useRef } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, SetAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const eneteredAmount = amountInputRef.current.value;
    const eneteredAmountNumber = +eneteredAmount;

    if (
      eneteredAmount.trim().length === 0 ||
      eneteredAmountNumber < 1 ||
      eneteredAmountNumber > 5
    ) {
        SetAmountIsValid(false);
        return;
    }

    props.onAddToCart(eneteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* using a generalised input for any component that requires it */}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p> PLease Enter a Valid Amount.</p>}
    </form>
  );
};

export default MealItemForm;
