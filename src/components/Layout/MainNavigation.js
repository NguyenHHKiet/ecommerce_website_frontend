import React from "react";
import { NavLink, useRouteLoaderData, Form } from "react-router-dom";
import classes from "./MainNavigation.module.scss";

const MainNavigation = () => {
    const token = useRouteLoaderData("root");

    return (
        <header className={`${classes.header} container`}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/shop"}
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }>
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes.logo}> Boutique</div>
            <nav>
                <ul>
                    <li>
                        <i className="bi bi-bag-check-fill me-1"></i>
                        <NavLink
                            to={"/cart"}
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }>
                            Cart
                        </NavLink>
                    </li>
                    {token ? (
                        <>
                            <li>
                                <i className="bi bi-person-circle me-1"></i>
                                <NavLink>{token.username}</NavLink>
                                <i
                                    class="bi bi-caret-down-fill"
                                    style={{ fontSize: "0.75rem" }}></i>
                            </li>
                            <li className="fst-italic">
                                <Form action="/logout" method="post">
                                    <button>(Logout)</button>
                                </Form>
                            </li>
                        </>
                    ) : (
                        <li>
                            <NavLink
                                to={"/login"}
                                className={({ isActive }) =>
                                    isActive ? classes.active : undefined
                                }>
                                Login
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
