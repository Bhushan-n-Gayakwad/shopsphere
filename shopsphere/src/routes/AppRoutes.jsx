import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Mainlayout";

import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Wishlist from "../pages/Wishlist/Wishlist";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
                {
                    //  it is equivalent to path:""
                    index: true,  
                    element: <Home/>,
                },
                {
                    path: "products",
                    element: <Products/>,
                },
                {
                    path: "cart",
                    element: <Cart />,
                },
                {
                    path: "wishlist",
                    element: <Wishlist />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "profile",
                    element: <Profile />,
                },

                // 
                {
                    path: "/products/:id",
                    element: <ProductDetails/>
                }
        ]
    },
    {
        path:"*",
        element: <NotFound/>
    }
])


export default router
