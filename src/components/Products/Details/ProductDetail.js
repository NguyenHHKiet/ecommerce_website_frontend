import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import RelatedContext from "../../../context/related-product";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import ProductItem from "../../ListOfProducts/ProductItem";
import { transformObject, transformPrice } from "../../../utils/transformData";

import classes from "./ProductDetail.module.scss";

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
    const { productId } = useParams();
    // localStorage.removeItem("cartArr");

    const [clickImage, setClickImage] = useState();
    const [enteredAmount, setEnteredAmount] = useState(1);
    const dispatch = useDispatch();

    const relatedCxt = useContext(RelatedContext);

    let content;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productId]);
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

    // transform type if data available
    const detail = transformObject(data).info;

    // save to local storage
    const addToCartHandler = () => {
        toast("🦄 Wow so easy!");
        const addAmountObject = {
            ...detail,
            img: clickImage ?? detail.img,
            amount: Number(enteredAmount),
        };
        dispatch({ type: "ADD_CART", item: addAmountObject });
    };

    // button counter
    const minusHandler = () => {
        if (enteredAmount > 1) {
            setEnteredAmount(enteredAmount - 1);
        } else {
            return;
        }
    };
    const addHandler = () => setEnteredAmount(enteredAmount + 1);

    if (detail) {
        const orderList = detail.long_desc.split("•");
        const price = transformPrice(detail.price);
        // rendering the order
        content = (
            <Fragment>
                <ToastContainer autoClose={2000} />
                <div className={`${classes.showcase} gap-4 py-4`}>
                    <div
                        className={`d-flex flex-wrap flex-row flex-md-column gap-2`}>
                        {detail.img.map((item, index) => (
                            <div key={index} className={classes.wrapper}>
                                <img
                                    src={item}
                                    onClick={() => setClickImage(item)}
                                    alt="img"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="">
                        <img src={clickImage ?? detail.img} alt="img" />
                    </div>
                    <div className="pb-4 fst-italic position-relative d-flex flex-column justify-content-between">
                        <div>
                            <h1 className="fs-2">{detail.name}</h1>
                            <p className="py-3 fs-4">{price}</p>
                            <p>{detail.short_desc}</p>
                        </div>
                        <div>
                            <p className="text-uppercase text-black">
                                category:
                                <span className="ps-2 text-lowercase text-secondary">
                                    {detail.category}
                                </span>
                            </p>
                            <InputGroup
                                className={classes.quantity}
                                hasValidation>
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
                </div>
                <Description orderList={orderList} related={relatedCxt.items} />
            </Fragment>
        );
    }

    return <Fragment>{content}</Fragment>;
};

export default ProductDetail;
