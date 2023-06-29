import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { tokenLoader } from "./utils/auth";
import RelatedProductProvider from "./context/RelatedProductProvider";

import Root from "./components/Layout/Root";
import Error from "./pages/Error";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { action as logoutAction } from "./pages/Logout";

const HomePage = lazy(() => import("./pages/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        id: "root",
        loader: tokenLoader,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<p>Loading...</p>}>
                        <HomePage />
                    </Suspense>
                ),
                loader: () =>
                    import("./API/data").then((module) => module.loader()),
            },
            {
                path: "shop",
                element: (
                    <Suspense fallback={<p>Loading...</p>}>
                        <ShopPage />
                    </Suspense>
                ),
                loader: () =>
                    import("./API/data").then((module) => module.loader()),
            },
            {
                path: "detail/:productId",
                element: (
                    <Suspense fallback={<p>Loading...</p>}>
                        <DetailPage />
                    </Suspense>
                ),
                loader: (meta) =>
                    import("./API/data").then((module) =>
                        module.loadDetail(meta)
                    ),
            },
            { path: "cart", element: <CartPage /> },
            { path: "checkout", element: <CheckoutPage /> },

            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
            { path: "logout", action: logoutAction },
        ],
    },
]);

function App() {
    return (
        <RelatedProductProvider>
            <RouterProvider router={router} />
        </RelatedProductProvider>
    );
}

export default App;
