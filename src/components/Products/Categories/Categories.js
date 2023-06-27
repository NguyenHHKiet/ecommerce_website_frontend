import React from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ProductItem from "../../ListOfProducts/ProductItem";
import Row from "react-bootstrap/esm/Row";

import classes from "./Categories.module.scss";

const arrTitle = [
    "APPLE",
    "All",
    "IPHONE & MAC",
    "iPhone",
    "iPad",
    "Macbook",
    "WIRELESS",
    "Airpod",
    "Watch",
    "OTHER",
    "Mouse",
    "Keyboard",
    "Other",
];

const Categories = () => {
    const data = useLoaderData();
    const [params] = useSearchParams();
    const sortId = params.get("sort");

    let content = data;
    if (sortId) {
        switch (sortId.toLowerCase()) {
            case "all":
                content = data;
                break;

            default:
                content = data.filter(
                    (item) => item.category === sortId.toLowerCase()
                );
                break;
        }
    }

    const Title = (item) => {
        let linked;
        if (
            item !== "APPLE" &&
            item !== "IPHONE & MAC" &&
            item !== "WIRELESS" &&
            item !== "OTHER"
        ) {
            linked = `?sort=${item}`;
        }
        return (
            <Link
                key={item}
                className="px-3 py-2 fst-italic fw-light"
                to={linked}>
                {item}
            </Link>
        );
    };

    const categoryLeft = (
        <div className="d-flex justify-content-between mb-3">
            <InputGroup className={`${classes.input}`}>
                <Form.Control
                    placeholder="Enter Search Here!"
                    aria-label="Enter Search Here!"
                    className="py-2"
                />
            </InputGroup>
            <Form.Select className={classes.select}>
                <option>Default sorting</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </div>
    );

    const categoryRight = (
        <div className={`d-grid gap-4 py-4`}>
            <Row>
                {content.length > 0 ? (
                    content.map((product) => (
                        <ProductItem
                            key={product._id.$oid}
                            product={product}
                            isLink={true}
                            type={"SELECTION"}
                        />
                    ))
                ) : (
                    <p>Not Found Product</p>
                )}
            </Row>
        </div>
    );

    return (
        <div className={`${classes.showcase} gap-4`}>
            <div className="">
                <h3 className="text-uppercase fst-italic mb-3">Categories</h3>
                <div className={classes.arrTitle}>
                    {arrTitle.map((item) => Title(item))}
                </div>
            </div>
            <div>
                {categoryLeft}
                {categoryRight}
            </div>
        </div>
    );
};

export default Categories;
