import React from "react";
import { Link } from "react-router-dom";
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
                        <Link to={"/shop?sort=iPhone"}>
                            <Ratio
                                className="overflow-hidden rounded-3"
                                aspectRatio="16x9">
                                <img src={product_1} alt="" />
                            </Ratio>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"/shop?sort=MacBook"}>
                            <Ratio
                                className="overflow-hidden rounded-3"
                                aspectRatio="16x9">
                                <img src={product_2} alt="" />
                            </Ratio>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to={"/shop?sort=iPad"}>
                            <Ratio
                                className="overflow-hidden rounded-3"
                                aspectRatio="1x1">
                                <img src={product_3} alt="" />
                            </Ratio>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"/shop?sort=Watch"}>
                            <Ratio
                                className="overflow-hidden rounded-3"
                                aspectRatio="1x1">
                                <img src={product_4} alt="" />
                            </Ratio>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={"/shop?sort=AirPod"}>
                            <Ratio
                                className="overflow-hidden rounded-3"
                                aspectRatio="1x1">
                                <img src={product_5} alt="" />
                            </Ratio>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ListOfCategories;
