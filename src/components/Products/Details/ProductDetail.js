import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailProduct } from "../../../API/data";
import RelatedContext from "../../../context/related-product";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ProductItem from "../../ListOfProducts/ProductItem";

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
                {orderList.map((item) =>
                    item.trim() ? (
                        <li
                            key={item}
                            className="py-1"
                            style={{ listStyle: "disc" }}>
                            {item}
                        </li>
                    ) : (
                        ""
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
    const { productId } = useParams();
    const [obj, setObj] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const relatedCxt = useContext(RelatedContext);

    let orderList, content;

    useEffect(() => {
        window.scrollTo(0, 0);

        const transformData = (product) => {
            const price = `${Number(product.price)
                .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
                .slice(0, -1)} VND`;
            setObj({
                name: product.name,
                price: price,
                category: product.category,
                img: [product.img1, product.img2, product.img3, product.img4],
                long_desc: product.long_desc,
                short_desc: product.short_desc,
                _id: product._id,
            });
        };
        detailProduct(productId, transformData, setIsLoading, setError);
    }, [productId]);

    if (obj) {
        orderList = obj.short_desc.split(".");
        content = (
            <Fragment>
                <div className={`${classes.showcase} gap-4 py-4`}>
                    <div>
                        <img src={obj.img} alt="img" />
                    </div>
                    <div className="pb-4 fst-italic position-relative">
                        <h1 className="fs-2">{obj.name}</h1>
                        <p className="py-3 fs-4">{obj.price}</p>
                        <p className="">{obj.long_desc}</p>
                        <div className="d-flex">
                            <p className="text-uppercase text-black">
                                category:
                            </p>
                            <p className="ps-2">{obj.category}</p>
                        </div>
                        <InputGroup style={{ maxWidth: "20rem" }}>
                            <Form.Control
                                placeholder="QUANTITY"
                                aria-label="QUANTITY"
                                className="rounded-0 fst-italic opacity-75"
                            />
                            <Button
                                variant="dark"
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

    if (isLoading) {
        content = <p style={{ height: "70vh" }}>Loading...</p>;
    }

    if (error) {
        content = <h1 style={{ height: "70vh" }}>Not Found</h1>;
    }

    return <Fragment>{content}</Fragment>;
};

export default ProductDetail;
