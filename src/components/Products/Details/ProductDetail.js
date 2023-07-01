import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import RelatedContext from "../../../context/related-product";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import ProductItem from "../../ListOfProducts/ProductItem";

import classes from "./ProductDetail.module.scss";

const transformData = (product) => {
    const price = `${Number(product.price)
        .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
        .slice(0, -1)} VND`;

    return {
        name: product.name,
        price: price,
        category: product.category,
        img: [product.img1, product.img2, product.img3, product.img4],
        long_desc: product.long_desc,
        short_desc: product.short_desc,
        _id: product._id,
    };
};

const Description = ({ orderList, related }) => (
    <div className={classes.description}>
        <button className="bg-black text-white py-2 px-4 mt-2 fst-italic text-uppercase">
            description
        </button>
        <div>
            <h1 className="text-uppercase fs-5 py-4">product description</h1>
            <h6 className="text-uppercase fs-6 opacity-75">đặc điểm nổi bật</h6>
            <ul className="opacity-75">
                {orderList.map((item, index) =>
                    item.trim() ? (
                        <li
                            key={index}
                            className="py-1"
                            style={{ listStyle: "disc" }}>
                            {item}
                        </li>
                    ) : (
                        <Fragment key={index}></Fragment>
                    )
                )}
            </ul>
            <h1 className="text-uppercase fs-5 py-4">Related Product</h1>
            <Row>
                {related.map((product) => (
                    <ProductItem product={product} isLink={true} />
                ))}
            </Row>
        </div>
    </div>
);

const ProductDetail = () => {
    const [data] = useLoaderData();
    // localStorage.removeItem("cartArr");

    const [clickImage, setClickImage] = useState();
    const [enteredAmount, setEnteredAmount] = useState(1);
    const dispatch = useDispatch();

    const relatedCxt = useContext(RelatedContext);

    let content;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // localStorage.clear();

    // Not Founded Product Id.
    if (!data)
        return (
            <h1
                style={{ height: "70vh" }}
                className="d-flex align-items-center justify-content-center">
                Not Founded Product Id.
            </h1>
        );
    const detail = transformData(data);

    const addToCartHandler = () => {
        toast("🦄 Wow so easy!");
        const addAmountObject = {
            ...detail,
            img: clickImage ?? detail.img,
            amount: Number(enteredAmount),
        };
        dispatch({ type: "ADD_CART", item: addAmountObject });
    };

    const minusHandler = () => setEnteredAmount(enteredAmount - 1);
    const addHandler = () => setEnteredAmount(enteredAmount + 1);

    console.log(detail);

    if (detail) {
        const orderList = detail.short_desc.split(".");
        content = (
            <Fragment>
                <ToastContainer autoClose={2000} />
                <div className={`${classes.showcase} gap-4 py-4`}>
                    <div
                        className={`position-absolute d-flex flex-column gap-2`}>
                        {detail.img.map((item) => (
                            <div className={classes.wrapper}>
                                <img
                                    src={item}
                                    onClick={() => setClickImage(item)}
                                    alt="img"
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        <img src={clickImage ?? detail.img} alt="img" />
                    </div>
                    <div className="pb-4 fst-italic position-relative">
                        <h1 className="fs-2">{detail.name}</h1>
                        <p className="py-3 fs-4">{detail.price}</p>
                        <p className="">{detail.long_desc}</p>
                        <div className="d-flex">
                            <p className="text-uppercase text-black">
                                category:
                            </p>
                            <p className="ps-2">{detail.category}</p>
                        </div>
                        <InputGroup className={classes.quantity} hasValidation>
                            <Form.Control
                                placeholder="QUANTITY"
                                aria-label="QUANTITY"
                                className="rounded-0 fst-italic opacity-75"
                                type="number"
                                min={0}
                                onChange={(e) => {
                                    setEnteredAmount(e.target.value);
                                }}
                            />
                            <div className={classes.buttonQuantity}>
                                <button
                                    className="btn minus1"
                                    onClick={minusHandler}>
                                    -
                                </button>
                                <input
                                    id="id_form-0-quantity"
                                    min={0}
                                    name="form-0-quantity"
                                    readOnly
                                    value={enteredAmount}
                                    type="number"
                                    onChange={(e) => {
                                        setEnteredAmount(e.target.value);
                                    }}
                                />
                                <button
                                    className="btn add1"
                                    onClick={addHandler}>
                                    +
                                </button>
                            </div>
                            <Button
                                onClick={addToCartHandler}
                                variant="dark"
                                style={{ height: "min-content" }}
                                className="bg-black text-white fst-italic rounded-0">
                                Add to Cart
                            </Button>
                        </InputGroup>
                    </div>
                </div>
                <Description orderList={orderList} related={relatedCxt.items} />
            </Fragment>
        );
    }

    return <Fragment>{content}</Fragment>;
};

export default ProductDetail;
