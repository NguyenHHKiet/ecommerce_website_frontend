import React, { Fragment } from "react";
import Banner from "../components/Banner/Banner";
import ListOfCategories from "../components/ListOfCategories/ListOfCategories";
import ListOfProducts from "../components/ListOfProducts/ListOfProducts";

const HomePage = () => {
    return (
        <Fragment>
            <Banner />
            <ListOfCategories />
            <ListOfProducts />
            <h1>services</h1>
            <h1>letter</h1>
        </Fragment>
    );
};

export default HomePage;
