import { createStore } from "redux";

const initialPopUpState = {
    info: {
        name: "",
        price: "",
        category: "",
        img: "",
        long_desc: "",
        short_desc: "",
        _id: {
            $oid: "",
        },
    },
    onClose: false,
};

const popupReducer = (state = initialPopUpState, action) => {
    if (action.type === "SELECT") {
        return {
            info: {
                name: action.payload.name,
                price: action.payload.price,
                category: action.payload.category,
                img: action.payload.img,
                long_desc: action.payload.long_desc,
                short_desc: action.payload.short_desc,
                _id: {
                    $oid: action.payload._id,
                },
            },
            onClose: false,
        };
    }
    if (action.type === "SHOW_POPUP") {
        return {
            info: {
                name: action.payload.name,
                price: action.payload.price,
                category: action.payload.category,
                img: action.payload.img,
                long_desc: action.payload.long_desc,
                short_desc: action.payload.short_desc,
                _id: {
                    $oid: action.payload._id,
                },
            },
            onClose: true,
        };
    }
    if (action.type === "HIDE_POPUP") {
        return {
            info: state.info,
            onClose: false,
        };
    }
    return state;
};

const store = createStore(popupReducer);

export default store;
