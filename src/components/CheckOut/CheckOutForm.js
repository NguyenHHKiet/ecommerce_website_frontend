import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { cartLoader } from "../../utils/cart";
import { transformPrice } from "../../utils/transformData";

const CheckOutForm = () => {
    const data = cartLoader();
    const [validated, setValidated] = useState(false);
    let totalAmount;

    const Item = ({ item }) => {
        const price = transformPrice(item.price);
        return (
            <>
                <div>
                    <h6>{item.name}</h6>
                    <p>
                        {price} X {item.amount}
                    </p>
                </div>
                <hr className="mb-1" />
            </>
        );
    };

    if (data) {
        totalAmount = transformPrice(data?.totalAmount);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="mb-5">
            <h4 className="text-uppercase fst-italic">billing details</h4>
            <Row className="my-4 fst-italic">
                <Col md={8} sm={12}>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group>
                                <Form.Label className="text-uppercase">
                                    Full name:
                                </Form.Label>
                                <Form.Control
                                    className="rounded-0 p-2"
                                    required
                                    type="text"
                                    placeholder="Enter Your Full Name Here!"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label className="text-uppercase">
                                    Email:
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Enter Your Email Here!"
                                    className="rounded-0 p-2"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label className="text-uppercase">
                                    Phone Number:
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Phone Number Here!"
                                    required
                                    className="rounded-0 p-2"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mt-2">
                                <Form.Label className="text-uppercase">
                                    Address:
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Address Here!"
                                    required
                                    className="rounded-0 p-2"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button
                            type="submit"
                            className="rounded-0 bg-black px-4 py-2">
                            Place order
                        </Button>
                    </Form>
                </Col>
                <Col md={4} sm={12}>
                    <Form className="bg-body-secondary p-4 rounded-1 mt-sm-2 mt-md-0">
                        <h4 className="text-uppercase my-3">your order</h4>
                        {data.listCart.map((item) => (
                            <Item key={item._id} item={item} />
                        ))}
                        <Form.Group
                            as={Row}
                            className="mb-3 text-uppercase h6 d-flex align-items-center">
                            <Form.Label column sm="4">
                                total
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control
                                    plaintext
                                    readOnly
                                    defaultValue="0"
                                    value={totalAmount}
                                    className="text-end fs-5"
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default CheckOutForm;
