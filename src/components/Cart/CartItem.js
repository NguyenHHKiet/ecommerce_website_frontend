import React from "react";
import { useDispatch } from "react-redux";

import classes from "./CartItem.module.scss";

const CartItem = ({ item, setIsLoading }) => {
    const dispatch = useDispatch();

    const price =
        Number(item.price.slice(0, -3).trim().split(".").join("")) *
        item.amount;
    const total = `${price
        .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
        .slice(0, -1)} VND`;

    const deleteItemCartHandler = () => {
        setIsLoading(true);
        dispatch({ type: "DELETE_CART", id: item._id.$oid });
    };

    return (
        <tr key={item._id.$oid}>
            <td style={{ maxWidth: "7rem" }}>
                <img src={item.img[0]} alt="img" className="w-100" />
            </td>
            <td style={{ minWidth: "10rem" }}>
                <h6>{item.name}</h6>
            </td>
            <td>{item.price}</td>
            <td>
                <div className={classes.buttonQuantity}>
                    <i className="bi bi-caret-left-fill"></i>
                    <input
                        id="id_form-0-quantity"
                        min={0}
                        name="form-0-quantity"
                        value={item.amount}
                        type="number"
                    />
                    <i className="bi bi-caret-right-fill"></i>
                </div>
            </td>
            <td>{total}</td>
            <td>
                <i className="bi bi-trash" onClick={deleteItemCartHandler}></i>
            </td>
        </tr>
    );
};
export default CartItem;
