import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import classes from "./LoginAuth.module.scss";

const LoginAuth = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className={classes.showcase}>
            <div className={classes.form}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <h1 className="d-flex justify-content-center mb-5">
                        Sign In
                    </h1>
                    <Row className="mb-3">
                        <Form.Group controlId="validationCustomUsername">
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="rounded-0 p-3 opacity-75"
                                />
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                className="rounded-0 p-3 opacity-75"
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please enter a password.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button
                        type="submit"
                        variant="dark"
                        className="w-100 rounded-0 p-3 opacity-75 text-uppercase">
                        Sign In
                    </Button>
                    <p className="mt-3 d-flex justify-content-center">
                        Create an account?
                        <Link className={"ms-1"} to={"/register"}>
                            Sign up
                        </Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default LoginAuth;
