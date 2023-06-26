import React from "react";

export const CategoriesContext = React.createContext({
    categories: [],
});

const catetoryReducer = (state, action) => {};

const CategoriesProvider = (props) => {
    const categoryContext = [];

    return (
        <CategoriesContext.Provider value={categoryContext}>
            {props.children}
        </CategoriesContext.Provider>
    );
};

export default CategoriesProvider;
