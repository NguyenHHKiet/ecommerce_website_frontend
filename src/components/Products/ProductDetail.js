import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal";

import classes from "./ProductDetail.module.scss";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
    const dispatch = useDispatch();
    const isInfo = useSelector((state) => state.info);
    // show and hide about description detail
    const hidePopUpHandler = () => dispatch({ type: "HIDE_POPUP" });

    let content = (
        <div className={`${classes.showcase} gap-4`}>
            <div>
                <img src={isInfo.img} alt="img" />
            </div>
            <div className="py-4 fst-italic">
                <h1 className="ml-2">{isInfo.name}</h1>
                <p className="ml-2">{isInfo.price}</p>
                <p className="ml-2">{isInfo.long_desc}</p>
                <Link to={"/shop"}>
                    <button className="bg-black text-white py-2 px-4 mt-2 fst-italic">
                        <i class="bi bi-cart-check-fill pe-2"></i> Browse
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

export default ProductDetail;
