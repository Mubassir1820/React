import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import AboutUs from "../pages/AboutUs";
import Shop from "../pages/shop";
import Checkout from "../pages/checkout";
import Layout from "../layout/Layout";
import Persons from "../pages/Persons";
import PostDetails from "../pages/PostDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/about-us",
          element: <AboutUs></AboutUs>,
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
        },
      
        {
          path: "/checkout",
          element: <Checkout></Checkout>,
        },

        {
          path: "/person",
          element: <Persons></Persons>,
        },
        {
          path: "/post-details/:id",
          element: <PostDetails></PostDetails>,
        },
      ]
    },
  ]);


  export default router;