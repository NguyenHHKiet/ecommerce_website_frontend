// find item in cart
export const findCartItem = (state, action) => {
    const cart = JSON.parse(localStorage.getItem("cartArr")) ?? state.cart;

    const existingCartItemIndex = cart.listCart.findIndex(
        (item) => item._id.$oid === action.item._id.$oid
    );

    const existingCartItem = cart.listCart[existingCartItemIndex];

    return { cart, existingCartItemIndex, existingCartItem };
};
