import React from "react";
import Col from "react-bootstrap/Col";
import classes from "./ListOfProducts.module.scss";
import { NavLink } from "react-router-dom";

const ProductItem = ({ product, setDetail, isLink }) => {
    const price = `${Number(product.price)
        .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
        .slice(0, -1)} VND`;
    function onClickHandler() {
        const transformData = {
            info: {
                name: product.name,
                price: price,
                category: product.category,
                img: product.img1,
                long_desc: product.long_desc,
                short_desc: product.short_desc,
                _id: {
                    $oid: product._id.$oid,
                },
            },
            onClose: true,
        };
        setDetail(transformData);
    }

    return (
        <Col
            key={product._id.$oid}
            xs={6}
            md={3}
            onClick={onClickHandler}
            className={classes.images}>
            <NavLink to={isLink ? `/detail/${product._id.$oid}` : "/"}>
                <article>
                    <figure>
                        <img src={product.img1} alt="img1" loading="lazy" />
                    </figure>
                    <div className={classes["product-content"]}>
                        <h6>{product.name}</h6>
                        <p>{price}</p>
                    </div>
                </article>
            </NavLink>
        </Col>
    );
};

export default ProductItem;
