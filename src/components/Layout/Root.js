import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Root = () => {
    return (
        <Fragment>
            <MainNavigation />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Root;
