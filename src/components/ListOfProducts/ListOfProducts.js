import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";

import classes from "./ListOfProducts.module.scss";
import ProductItem from "./ProductItem";
import PopUpDetail from "../Products/PopUpDetail";

const ListOfProducts = ({ data }) => {
    const isClose = useSelector((state) => state.onClose);
    const isData = data.map((product) => {
        return {
            name: product.name,
            price: product.price,
            category: product.category,
            img: [product.img1, product.img2, product.img3, product.img4],
            long_desc: product.long_desc,
            short_desc: product.short_desc,
            _id: {
                $oid: product._id.$oid,
            },
        };
    });

    return (
        <Fragment>
            {isClose && <PopUpDetail />}
            <div className="py-3">
                <div className={classes.title}>
                    <h6 className="fst-italic text-uppercase">
                        Made the hard way
                    </h6>
                    <h1 className="fst-italic text-uppercase">
                        Top trending products
                    </h1>
                </div>
                <div className={`d-grid gap-4 py-4`}>
                    <Row>
                        {isData.map((product) => (
                            <ProductItem
                                key={product._id["$oid"]}
                                product={product}
                                type={"SHOW_POPUP"}
                            />
                        ))}
                    </Row>
                </div>
            </div>
        </Fragment>
    );
};

export default ListOfProducts;
