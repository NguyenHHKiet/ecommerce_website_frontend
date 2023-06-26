import React, { Fragment } from "react";
import { Outlet, json } from "react-router-dom";
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

export async function loader() {
    const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );

    if (!response.ok) {
        throw json(
            { message: "Could not fetch list of products." },
            { status: 500 }
        );
    } else {
        const resData = await response.json();
        return resData;
    }
}
