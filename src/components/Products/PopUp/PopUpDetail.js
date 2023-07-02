import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../UI/Modal";

import classes from "./PopUpDetail.module.scss";
import { transformPrice } from "../../../utils/transformData";

const PopUpDetail = () => {
    const dispatch = useDispatch();
    const isInfo = useSelector((state) => state.info);
    // show and hide about description detail
    const hidePopUpHandler = () => dispatch({ type: "HIDE_POPUP" });

    const price = transformPrice(isInfo.price);

    let content = (
        <div className={`${classes.showcase} gap-4`}>
            <div>
                <img src={isInfo.img} alt="img" />
            </div>
            <div className="py-md-4 py-0 fst-italic">
                <i
                    className="bi bi-x-lg position-absolute top-0 end-0 m-3 px-2"
                    style={{ cursor: "pointer" }}
                    onClick={hidePopUpHandler}></i>
                <h1 className="ms-2">{isInfo.name}</h1>
                <p className="ms-2">{price}</p>
                <p className="ms-2 d-none d-md-block">{isInfo.short_desc}</p>
                <Link to={"/shop"} onClick={hidePopUpHandler}>
                    <button className="bg-black text-white py-2 px-4 mt-2 fst-italic">
                        <i className="bi bi-cart-check-fill pe-2"></i> Browse
                        collections
                    </button>
                </Link>
            </div>
        </div>
    );

    return (
        <Fragment>
            <Modal onClose={hidePopUpHandler}>{content}</Modal>
        </Fragment>
    );
};

export default PopUpDetail;
