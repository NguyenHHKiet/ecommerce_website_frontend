import React, { Fragment } from "react";
import { json, useLoaderData } from "react-router-dom";
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
