import React, { Fragment, useEffect } from "react";
import classes from "./ProductList.module.scss";
import Categories from "./Categories/Categories";

const ProductList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <div className={`${classes.banner} px-5 mb-5 bg-body-secondary`}>
                <h2 className="text-uppercase fst-italic">Shop</h2>
                <p className="text-uppercase fst-italic opacity-50 fw-semibold">
                    Shop
                </p>
            </div>
            <Categories />
        </Fragment>
    );
};

export default ProductList;
