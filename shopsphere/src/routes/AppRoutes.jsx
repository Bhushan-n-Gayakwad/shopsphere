import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/Mainlayout";

import Home from "../pages/Home/Home";
import Products from "../pages/Products/Product";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Wishlist from "../pages/Wishlist/Wishlist";
import Cart from "../pages/Cart/Cart";

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
        ]
    },
    {
        path:"*",
        element: <NotFound/>
    }
])


export default router
