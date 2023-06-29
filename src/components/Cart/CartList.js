import React, { Fragment, useEffect } from "react";
import classes from "./CartList.module.scss";

const CartList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <div className={`${classes.banner} px-5 mb-5 bg-body-secondary`}>
                <h2 className="text-uppercase fst-italic">Cart</h2>
                <p className="text-uppercase fst-italic opacity-50 fw-semibold">
                    Cart
                </p>
            </div>
        </Fragment>
    );
};

export default CartList;
