import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import AboutUs from "../Pages/AboutUs";
import Themes from "../Pages/Themes";

const router = createBrowserRouter([
  {   
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/service',
            Component:Service
        },
        {
            path:'/aboutus',
            Component:AboutUs
        },
        {
            path:'/themes',
            Component: Themes
        }
    ]
   }
]);

export default router ;
