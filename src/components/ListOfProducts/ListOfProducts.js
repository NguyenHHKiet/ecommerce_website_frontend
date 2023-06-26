import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Row from "react-bootstrap/Row";

import classes from "./ListOfProducts.module.scss";
import ProductItem from "./ProductItem";
import ProductDetail from "../Products/ProductDetail";

const ListOfProducts = ({ data }) => {
    const dispatch = useDispatch();
    const isClose = useSelector((state) => state.onClose);
    const [detail, setDetail] = useState(null);

    if (detail) {
        dispatch({ type: "SHOW_POPUP", payload: detail.info });
        setDetail(null);
    }

    return (
        <Fragment>
            {isClose && <ProductDetail />}
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
                        {data.map((product) => (
                            <ProductItem
                                key={product._id["$oid"]}
                                product={product}
                                setDetail={setDetail}
                            />
                        ))}
                    </Row>
                </div>
            </div>
        </Fragment>
    );
};

export default ListOfProducts;
