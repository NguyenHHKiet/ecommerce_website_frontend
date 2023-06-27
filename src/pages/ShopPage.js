import React, { Fragment } from "react";
import ProductList from "../components/Products/ProductList";

const ShopPage = () => {
    window.scrollTo(0, 0);

    return (
        <Fragment>
            <ProductList />
        </Fragment>
    );
};

export default ShopPage;
