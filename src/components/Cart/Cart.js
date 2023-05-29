import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Shahi Paneer", amount: 2, price: 200.0 }].map(
        (item) => (
          <li key={item.id}>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    // sending the close cart to the Modal component to make backdrop invisible or vanish
    <Modal onCloseCart={props.onCloseCart}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs. 400.00</span>
      </div>
      <div className={classes.actions}>
        {/* fetching the value through App.js via onCloseCart function that points to the value inside hideCartHandler to close the cart when button is pressed so making an onClick to close it when button pressed */}
        {/* for making the BackDrop unfunctionable when cart is closed we go to Modal.js */}
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
