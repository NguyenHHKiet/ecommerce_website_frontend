import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader } from "./components/Layout/Root";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            { index: true, element: <HomePage />, loader: loader },
            { path: "shop", element: <ShopPage />, loader: loader },
            { path: "detail/:productId", element: <DetailPage /> },
            { path: "cart", element: <CartPage /> },
            { path: "checkout", element: <CheckoutPage /> },

            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
