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
    cart: { listCart: [], totalAmount: 0 },
};

const useGlobalReducer = (state = initialState, action) => {
    if (action.type === "SHOW_POPUP") {
        return {
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
            JSON.parse(localStorage.getItem("userArr")) || state.userArr;

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
            JSON.parse(localStorage.getItem("userArr")) || state.userArr;

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
        } else {
            alert("Please enter a new email & password");
        }
    }

    if (action.type === "ON_LOGOUT") {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("expiration");
    }

    if (action.type === "ADD_CART") {
        console.log(action.type);
        const cartArr =
            JSON.parse(localStorage.getItem("cartArr")) || state.cart;

        // transform price to number
        const price = action.item.price.slice(0, -3).trim().split(".").join("");
        // total amount of price is
        const updatedTotalAmount =
            cartArr.totalAmount + price * action.item.amount;

        const existingCartItemIndex = cartArr.listCart.findIndex(
            (item) => item._id.$oid === action.item._id.$oid
        );

        const existingCartItem = cartArr.listCart[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            // updated quantity
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            // create new array
            updatedItems = [...cartArr.listCart];
            // updated item in cart with index
            updatedItems[existingCartItemIndex] = updatedItem;

            // save updated cart items
            localStorage.setItem("cartArr", updatedItems);
        } else {
            updatedItems = cartArr.listCart.concat(action.item);

            // save cart items
            localStorage.setItem("cartArr", updatedItems);
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
    }
    if (action.type === "DELETE_CART") {
        console.log(action.type);
    }

    return state;
};

const store = createStore(useGlobalReducer);

export default store;

// create token clone
const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }

    return result;
}
