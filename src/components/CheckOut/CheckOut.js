import React from "react";
import CheckOutForm from "./CheckOutForm";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import classes from "./CheckOut.module.scss";

const CheckOut = () => {
    return (
        <div className={classes.showcase}>
            <div
                className="px-5 mb-5 bg-body-secondary w-100 d-flex justify-content-between align-items-center"
                style={{ height: "25vh" }}>
                <h2 className="text-uppercase fst-italic">Checkout</h2>
                <div className="text-uppercase fst-italic text-secondary fw-semibold">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/cart">Cart</Breadcrumb.Item>
                        <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <CheckOutForm />
        </div>
    );
};

export default CheckOut;
