export function getCartToken() {
    const token = JSON.parse(localStorage.getItem("cartArr"));

    if (!token) return null;

    return token;
}

export function cartLoader() {
    const cart = getCartToken();
    return cart;
}
