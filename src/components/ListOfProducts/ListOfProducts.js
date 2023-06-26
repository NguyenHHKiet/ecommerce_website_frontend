import React, { useState } from "react";
import Row from "react-bootstrap/Row";

import classes from "./ListOfProducts.module.scss";
import ProductItem from "./ProductItem";

const ListOfProducts = ({ data }) => {
    return (
        <div className="py-3">
            <div className={classes.title}>
                <h6 className="fst-italic text-uppercase">Made the hard way</h6>
                <h1 className="fst-italic text-uppercase">
                    Top trending products
                </h1>
            </div>
            <div className={`${classes.images} d-grid gap-4 py-4`}>
                <Row>
                    {data.map((product) => (
                        <ProductItem product={product} />
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default ListOfProducts;
