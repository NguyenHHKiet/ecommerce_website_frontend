import React, { useState } from "react";
import {
    Link,
    useLoaderData,
    useSearchParams,
    useNavigate,
} from "react-router-dom";
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
    "MacBook",
    "WIRELESS",
    "AirPod",
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
    const searchId = params.get("search");
    const navigated = useNavigate();
    const [enteredSearch, setEnteredSearch] = useState("");

    const isData = data.map((product) => {
        return {
            name: product.name,
            price: product.price,
            category: product.category,
            img: [product.img1, product.img2, product.img3, product.img4],
            long_desc: product.long_desc,
            short_desc: product.short_desc,
            _id: {
                $oid: product._id.$oid,
            },
        };
    });

    let content = isData;
    // search items based on input
    const searchItemsHandler = (event) => {
        if (event.key === "Enter" || event.charCode === 13)
            navigated(`?search=${enteredSearch}`);
    };

    if (searchId) {
        content = isData.filter((item) =>
            item.name.toLowerCase().includes(searchId.toLowerCase())
        );
    }

    if (sortId) {
        // sort based on title
        switch (sortId.toLowerCase()) {
            case "all":
                content = isData;
                break;

            default:
                content = isData.filter(
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

    const ctgTools = (
        <div className="d-flex justify-content-between mb-3">
            <InputGroup className={`${classes.input}`}>
                <Form.Control
                    placeholder="Enter Search Here!"
                    aria-label="Enter Search Here!"
                    className="py-2"
                    onChange={(e) => setEnteredSearch(e.target.value)}
                    onKeyPress={searchItemsHandler}
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

    const ctgContent = (
        <div className={`d-grid gap-4 py-4`}>
            <Row>
                {content.length > 0 ? (
                    content.map((product) => (
                        <ProductItem
                            key={product._id.$oid}
                            product={product}
                            isLink={true}
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
            <div className="mb-5 pb-5">
                <h3 className="text-uppercase fst-italic mb-3">Categories</h3>
                <div className={classes.arrTitle}>
                    {arrTitle.map((item) => Title(item))}
                </div>
            </div>
            <div>
                {ctgTools}
                {ctgContent}
            </div>
        </div>
    );
};

export default Categories;
