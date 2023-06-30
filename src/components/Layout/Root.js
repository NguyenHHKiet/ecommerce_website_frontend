import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import ChatBox from "../ChatBox/ChatBox";

const Root = () => {
    return (
        <Fragment>
            <MainNavigation />
            <main className="container">
                <Outlet />
            </main>
            <ChatBox />
            <Footer />
        </Fragment>
    );
};

export default Root;
