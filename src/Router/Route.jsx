import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import AboutUs from "../Pages/AboutUs";
import Themes from "../Pages/Themes";
import Portfolio from "../Pages/Portfolio";
import ProjectDetails from "../Component/Portfolio/ProjectDetails";

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
        },
        {
            path:'/portfolio',
            Component : Portfolio
        },
        {
            path:'/project/:id',
            Component: ProjectDetails
        }
    ]
   }
]);

export default router ;
