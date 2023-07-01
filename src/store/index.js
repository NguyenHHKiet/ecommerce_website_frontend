import { createStore } from "redux";

const initialState = {
    info: {
        name: "",
        price: "",
        category: "",
        img: [],
        long_desc: "",
        short_desc: "",
        _id: {
            $oid: "",
        },
    },
    onClose: false,
    userArr: [],
    isAuthenticated: false,
    cart: { listCart: [], totalAmount: 0 },
};

const useGlobalReducer = (state = initialState, action) => {
    if (action.type === "SHOW_POPUP") {
        return {
            ...state,
            info: {
                name: action.payload.info.name,
                price: action.payload.info.price,
                category: action.payload.info.category,
                img: action.payload.info.img,
                long_desc: action.payload.info.long_desc,
                short_desc: action.payload.info.short_desc,
                _id: action.payload.info._id,
            },
            onClose: true,
        };
    }
    if (action.type === "HIDE_POPUP") {
        return {
            ...state,
            onClose: false,
        };
    }

    if (action.type === "ADD_USER") {
        const userArr =
            JSON.parse(localStorage.getItem("userArr")) ?? state.userArr;

        const existingUserIndex = userArr.findIndex(
            (user) => user.email === action.user.email
        );
        const existingUser = userArr[existingUserIndex];
        let updatedUserArr;

        if (!existingUser) {
            updatedUserArr = userArr.concat(action.user);

            // save userArr in local storage
            localStorage.setItem("userArr", JSON.stringify(updatedUserArr));
        } else {
            updatedUserArr = userArr;
            alert("Email is existed, please");
        }

        return {
            ...state,
            userArr: updatedUserArr,
        };
    }

    if (action.type === "ON_LOGIN") {
        const userArr =
            JSON.parse(localStorage.getItem("userArr")) ?? state.userArr;

        const existingUserIndex = userArr.findIndex(
            (user) =>
                user.email === action.user.email &&
                user.password === action.user.password
        );
        const existingUser = userArr[existingUserIndex];

        if (existingUser) {
            localStorage.setItem("currentUser", JSON.stringify(existingUser));
            // localStorage.setItem("token", generateString(12));
            const expiration = new Date();
            expiration.setHours(expiration.getHours() + 1);
            localStorage.setItem("expiration", expiration.toISOString());
            return { ...state, isAuthenticated: true };
        } else {
            alert("Please enter a new email & password");
        }
        return state;
    }

    if (action.type === "ON_LOGOUT") {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("expiration");
        return { ...state, isAuthenticated: !state.isAuthenticated };
    }

    if (action.type === "ADD_CART") {
        console.log(action.type);
        const cart = JSON.parse(localStorage.getItem("cartArr")) ?? state.cart;

        // transform price to number
        const price = action.item.price.slice(0, -3).trim().split(".").join("");
        // total amount of price is
        const updatedTotalAmount =
            cart.totalAmount + price * action.item.amount;

        const existingCartItemIndex = cart.listCart.findIndex(
            (item) => item._id.$oid === action.item._id.$oid
        );

        const existingCartItem = cart.listCart[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            // updated quantity
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            // create new array
            updatedItems = [...cart.listCart];
            // updated item in cart with index
            updatedItems[existingCartItemIndex] = updatedItem;

            // save updated cart items
            localStorage.setItem(
                "cartArr",
                JSON.stringify({
                    listCart: updatedItems,
                    totalAmount: updatedTotalAmount,
                })
            );
        } else {
            updatedItems = cart.listCart.concat(action.item);

            // save cart items
            localStorage.setItem(
                "cartArr",
                JSON.stringify({
                    listCart: updatedItems,
                    totalAmount: updatedTotalAmount,
                })
            );
        }

        return {
            ...state,
            cart: {
                listCart: updatedItems,
                totalAmount: updatedTotalAmount,
            },
        };
    }
    if (action.type === "UPDATE_CART") {
        console.log(action.type);
        const cart = JSON.parse(localStorage.getItem("cartArr")) ?? state.cart;

        const existingCartItemIndex = cart.listCart.findIndex(
            (item) => item._id.$oid === action.item.id
        );

        const existingCartItem = cart.listCart[existingCartItemIndex];

        // subtract the amount out
        const oldPrice =
            existingCartItem.price.slice(0, -3).trim().split(".").join("") *
            existingCartItem.amount;
        let updatedTotalAmount = cart.totalAmount - oldPrice;
        // updated quantity
        const updatedItem = {
            ...existingCartItem,
            amount: action.item.amount,
        };

        // transform price to number
        const newPrice =
            updatedItem.price.slice(0, -3).trim().split(".").join("") *
            updatedItem.amount;
        // total amount of price is
        updatedTotalAmount += newPrice;
        let updatedItems;

        // create new array
        updatedItems = [...cart.listCart];
        // updated item in cart with index
        updatedItems[existingCartItemIndex] = updatedItem;

        // save updated cart items
        localStorage.setItem(
            "cartArr",
            JSON.stringify({
                listCart: updatedItems,
                totalAmount: updatedTotalAmount,
            })
        );

        return {
            ...state,
            cart: {
                listCart: updatedItems,
                totalAmount: updatedTotalAmount,
            },
        };
    }
    if (action.type === "DELETE_CART") {
        console.log(action.type);
        const cart = JSON.parse(localStorage.getItem("cartArr")) ?? state.cart;

        const existingCartItemIndex = cart.listCart.findIndex(
            (item) => item._id.$oid === action.item.id
        );

        const existingCartItem = cart.listCart[existingCartItemIndex];

        const price = existingCartItem.price
            .slice(0, -3)
            .trim()
            .split(".")
            .join("");

        let updatedItems, updatedTotalAmount;

        if (existingCartItem) {
            // updated
            updatedTotalAmount =
                cart.totalAmount - price * existingCartItem.amount;
            // remove object
            updatedItems = cart.listCart.filter(
                (item) => item._id.$oid !== existingCartItem._id.$oid
            );

            // save updated items
            localStorage.setItem(
                "cartArr",
                JSON.stringify({
                    listCart: updatedItems,
                    totalAmount: updatedTotalAmount,
                })
            );
        }

        return {
            ...state,
            cart: {
                listCart: updatedItems,
                totalAmount: updatedTotalAmount,
            },
        };
    }

    return state;
};

const store = createStore(useGlobalReducer);

export default store;
