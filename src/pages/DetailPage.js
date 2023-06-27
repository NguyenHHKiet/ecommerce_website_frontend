import React, { Fragment } from "react";
import ProductDetail from "../components/Products/Details/ProductDetail";

const DetailPage = () => {
    window.scrollTo(0, 0);

    return (
        <Fragment>
            <ProductDetail />
        </Fragment>
    );
};

export default DetailPage;
