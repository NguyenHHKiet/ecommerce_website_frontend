import React from "react";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import RelatedProductContext from "../../context/related-product";
import { transformPrice, transformObject } from "../../utils/transformData";

import classes from "./ListOfProducts.module.scss";

const ProductItem = ({ product, isLink, type }) => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const relatedCtx = useContext(RelatedProductContext);

    const price = transformPrice(product.price);

    function onClickHandler(event) {
        event.preventDefault();

        relatedCtx.addItem(product);
        type === "SHOW_POPUP"
            ? dispatch({ type: type, payload: product })
            : navigation(isLink ? `/detail/${product._id.$oid}` : "./");
    }

    return (
        <Col
            key={product._id.$oid}
            xs={6}
            md={3}
            onClick={onClickHandler}
            className={classes.images}>
            <article>
                <figure>
                    <img src={product.img} alt="img1" loading="lazy" />
                </figure>
                <div className={classes["product-content"]}>
                    <h6>{product.name}</h6>
                    <p>{price}</p>
                </div>
            </article>
        </Col>
    );
};

export default ProductItem;
