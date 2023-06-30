import { json } from "react-router-dom";

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

export async function loadDetail({ params }) {
    // {request: Request, params: {…}, context: undefined}
    const id = params.productId;
    const resData = await loader();

    const item = resData.filter((item) => item._id.$oid === id);

    return item;
}
