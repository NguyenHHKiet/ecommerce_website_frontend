import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Row className={`container py-5 pb-0 ${classes.content}`}>
                <Col xs={6} md={4} className="mb-5">
                    <Row>
                        <h3>Customer Services</h3>
                    </Row>
                    <Row>Help & Contact Us</Row>
                    <Row>Returns & Refunds</Row>
                    <Row>Online States</Row>
                    <Row>Terms & Conditions</Row>
                </Col>
                <Col xs={6} md={4} className="mb-5">
                    <Row>
                        <h3>Company</h3>
                    </Row>
                    <Row>What We Do</Row>
                    <Row>Available Services</Row>
                    <Row>Latest posts</Row>
                    <Row>FAQs</Row>
                </Col>
                <Col xs={6} md={4} className="mb-5">
                    <Row>
                        <h3>Social Media</h3>
                    </Row>
                    <Row>Twitter</Row>
                    <Row>Instagram</Row>
                    <Row>Facebook</Row>
                    <Row>Pinterest</Row>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
