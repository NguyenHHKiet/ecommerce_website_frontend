import React, { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import ListOfCategories from "../components/ListOfCategories/ListOfCategories";
import ListOfProducts from "../components/ListOfProducts/ListOfProducts";
import InfoAnother from "../components/InfoAnother/InfoAnother";

const HomePage = () => {
    const data = useLoaderData();

    return (
        <Fragment>
            <Banner />
            <ListOfCategories />
            <ListOfProducts data={data} />
            <InfoAnother />
        </Fragment>
    );
};

export default HomePage;
