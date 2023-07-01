import React, { Fragment, useEffect } from "react";
import Categories from "../Products/Categories/Categories";

const ProductList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <div
                className="px-5 mb-5 bg-body-secondary w-100 d-flex justify-content-between align-items-center"
                style={{ height: "25vh" }}>
                <h2 className="text-uppercase fst-italic">Shop</h2>
                <p className="text-uppercase fst-italic text-secondary fw-semibold">
                    Shop
                </p>
            </div>
            <Categories />
        </Fragment>
    );
};

export default ProductList;
