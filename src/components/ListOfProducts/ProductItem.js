import React from "react";
import Col from "react-bootstrap/Col";
import classes from "./ListOfProducts.module.scss";

const ProductItem = ({ product }) => {
    return (
        <Col key={product._id.$oid} xs={6} md={3}>
            <article>
                <figure>
                    <img src={product.img1} alt="img1" />
                </figure>
                <div className={classes["product-content"]}>
                    <h6>{product.name}</h6>
                    <p>
                        {Number(product.price)
                            .toLocaleString("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            })
                            .slice(0, -1)}
                        VND
                    </p>
                </div>
            </article>
        </Col>
    );
};

export default ProductItem;
