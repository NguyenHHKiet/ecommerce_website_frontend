export const transformPrice = (price) =>
    `${Number(price)
        .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
        .slice(0, -1)} VND`;

export const transformObject = (product) => {
    return {
        info: {
            name: product.name,
            price: product.price,
            category: product.category,
            img: [product.img1, product.img2, product.img3, product.img4],
            long_desc: product.long_desc,
            short_desc: product.short_desc,
            _id: product._id,
        },
    };
};
