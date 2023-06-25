import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./ListOfProducts.module.scss";

const ListOfProducts = () => {
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
                    <Col xs={6} md={3}>
                        <article>
                            <figure>
                                <img src="" alt="" />
                            </figure>
                            <div>
                                <h5>xs=6 md=4</h5>
                                <p>xs=6 md=4</p>
                            </div>
                        </article>
                    </Col>
                    <Col xs={6} md={3}>
                        xs=6 md=4
                    </Col>
                    <Col xs={6} md={3}>
                        xs=6 md=4
                    </Col>
                    <Col xs={6} md={3}>
                        xs=6 md=4
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ListOfProducts;

export async function loader() {
    fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
        .then((response) => response.json())
        .then((data) => console.log(data));
}
