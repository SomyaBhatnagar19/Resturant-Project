import CartContext from "./cart-context";
const CartProvider = props => {
    const addItemsToCartHandler = item => {};
    const removeItemsToCartHandler = id => {};
    const cartContext = {
        item: [],
        totalAmount: 0,
        addItem: addItemsToCartHandler,
        removeItem: removeItemsToCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;