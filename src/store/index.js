import { createStore } from "redux";

const initialPopUpState = {
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
};

const popupReducer = (state = initialPopUpState, action) => {
    if (action.type === "SELECTION") {
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
            onClose: false,
        };
    }
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
            info: state.info,
            onClose: false,
        };
    }
    return state;
};

const store = createStore(popupReducer);

export default store;
