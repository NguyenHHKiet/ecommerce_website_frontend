import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";

const MainNavigation = () => {
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
                        <NavLink
                            to={"/cart"}
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }>
                            Cart
                        </NavLink>
                    </li>
                    <li>
                        <i className="fa fa-user"></i>
                        <NavLink
                            to={"/login"}
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }>
                            {" "}
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
