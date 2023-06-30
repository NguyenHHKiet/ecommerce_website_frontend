import React from "react";

const RelatedProductContext = React.createContext({
    items: [],
    totalQuantity: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default RelatedProductContext;
