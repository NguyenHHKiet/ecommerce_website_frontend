import React from "react";
import { useSelector } from "react-redux";

const ProductDetail = () => {
    const data = useSelector((state) => state.info);

    console.log(data);

    return <div>ProductDetail</div>;
};

export default ProductDetail;
