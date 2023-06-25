import React from "react";
import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./ListOfCategories.module.scss";

import product_1 from "../../assets/images/product_1.png";
import product_2 from "../../assets/images/product_2.png";
import product_3 from "../../assets/images/product_3.png";
import product_4 from "../../assets/images/product_4.png";
import product_5 from "../../assets/images/product_5.png";

const ListOfCategories = () => {
    return (
        <div className="py-3">
            <div className={classes.title}>
                <h6 className="fst-italic text-uppercase">
                    Carefully Created Collections
                </h6>
                <h1 className="fst-italic text-uppercase">
                    Browse Our Categories
                </h1>
            </div>
            <div className={`${classes.images} d-grid gap-4 py-4`}>
                <Row>
                    <Col>
                        <Ratio
                            className="overflow-hidden rounded-3"
                            aspectRatio="16x9">
                            <img src={product_1} alt="" />
                        </Ratio>
                    </Col>
                    <Col>
                        <Ratio
                            className="overflow-hidden rounded-3"
                            aspectRatio="16x9">
                            <img src={product_2} alt="" />
                        </Ratio>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Ratio
                            className="overflow-hidden rounded-3"
                            aspectRatio="1x1">
                            <img src={product_3} alt="" />
                        </Ratio>
                    </Col>
                    <Col>
                        <Ratio
                            className="overflow-hidden rounded-3"
                            aspectRatio="1x1">
                            <img src={product_4} alt="" />
                        </Ratio>
                    </Col>
                    <Col>
                        <Ratio
                            className="overflow-hidden rounded-3"
                            aspectRatio="1x1">
                            <img src={product_5} alt="" />
                        </Ratio>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ListOfCategories;
