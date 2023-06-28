import React from "react";
import { useRef, useState } from "react";
import { Link, useNavigate, useLocation, redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import classes from "./AuthForm.module.scss";

// const patterns = {
//     username: /^[a-z\d]{5,12}$/i,
//     password: /^[\d\w@-]{8,20}$/i,
//     email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
//     phone: /^\d{10,11}$/,
//     // phone: /^\d{3}-\d{3}-\d{4}$/,
// };

// const validate = (field, regex) => (regex.test(field) ? true : false);

const AuthForm = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);
    const enteredUsername = useRef();
    const enteredEmail = useRef();
    const enteredPassword = useRef();
    const enteredPhone = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        setValidated(true);

        const enteredEmailValue = enteredEmail.current.value;
        const enteredPasswordValue = enteredPassword.current.value;
        let enteredUsernameValue, enteredPhoneValue;

        if (form.checkValidity()) {
            if (pathname === "/register") {
                enteredUsernameValue = enteredUsername.current.value;
                enteredPhoneValue = enteredPhone.current.value;

                const objData = {
                    username: enteredUsernameValue,
                    email: enteredEmailValue,
                    password: enteredPasswordValue,
                    phone: enteredPhoneValue,
                };
                dispatch({ type: "ADD_USER", user: objData });
                navigate("/login");
            } else {
                const objData = {
                    email: enteredEmailValue,
                    password: enteredPasswordValue,
                };
                dispatch({ type: "ON_LOGIN", user: objData });
                window.location.replace("/");
            }
        }
    };

    let inputUsername, inputPhone;
    if (pathname === "/register") {
        inputUsername = (
            <Form.Group controlId="validationCustomUsername">
                <Form.Control
                    type="text"
                    name="username"
                    placeholder="Full Name"
                    pattern="[a-z\d]{5,12}"
                    required
                    className="rounded-0 p-3 opacity-75"
                    ref={enteredUsername}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter the full name (username).
                </Form.Control.Feedback>
            </Form.Group>
        );
        inputPhone = (
            <Form.Group controlId="validationCustomPhone">
                <Form.Control
                    dir="ltr"
                    type="text"
                    title="Enter numbers only."
                    pattern="[\d]{10,11}"
                    maxLength="11"
                    autoComplete="off"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="rounded-0 p-3 opacity-75"
                    ref={enteredPhone}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter numbers only the phone.
                </Form.Control.Feedback>
            </Form.Group>
        );
    }

    return (
        <div className={classes.showcase}>
            <div className={classes.form}>
                <Form
                    method="post"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}>
                    <h1 className="d-flex justify-content-center mb-5 fst-italic">
                        {pathname === "/login" ? "Sign In" : "Sign Up"}
                    </h1>
                    <Row className="mb-3">
                        {inputUsername}
                        <Form.Group controlId="validationCustomEmail">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="rounded-0 p-3 opacity-75"
                                ref={enteredEmail}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please enter a email (example@example.com).
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomPassword">
                            <Form.Control
                                required
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="rounded-0 p-3 opacity-75"
                                pattern=".{8,20}"
                                ref={enteredPassword}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Please enter a password long 8 - 20 character.
                            </Form.Control.Feedback>
                        </Form.Group>
                        {inputPhone}
                    </Row>
                    <Button
                        type="submit"
                        variant="dark"
                        className="w-100 rounded-0 p-3 opacity-75 text-uppercase">
                        {pathname === "/login" ? "Sign In" : "Sign Up"}
                    </Button>
                    <p className="mt-3 d-flex justify-content-center fst-italic">
                        {pathname !== "/login"
                            ? "Login?"
                            : "Create an account?"}
                        <Link
                            className={"ms-1"}
                            to={pathname !== "/login" ? "/login" : "/register"}>
                            {pathname !== "/login" ? "Click" : "Sign Up"}
                        </Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default AuthForm;
