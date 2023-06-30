import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import classes from "./InfoAnother.module.scss";

const InfoAnother = () => {
    return (
        <div className={classes.showcase}>
            <Row className={`${classes.title} py-5`}>
                <Col>
                    <h6>free shipping</h6>
                    <p>Free shipping worldwide</p>
                </Col>
                <Col>
                    <h6>24 x 7 service</h6>
                    <p>Free shipping worldwide</p>
                </Col>
                <Col>
                    <h6>festival offer</h6>
                    <p>Free shipping worldwide</p>
                </Col>
            </Row>
            <Row className={`${classes.subscribe} my-5`}>
                <Col>
                    <h1 className="text-uppercase fst-italic">
                        let's be friends!
                    </h1>
                    <h6 className="fst-italic">
                        Nisi nisi tempor consequat laboris nisi.
                    </h6>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Enter your email address"
                            aria-label="Enter your email address"
                            className="py-3"
                        />
                        <Button variant="dark" className="py-3">
                            Subscribe
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
        </div>
    );
};

export default InfoAnother;
