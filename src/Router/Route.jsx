import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import AboutUs from "../Pages/AboutUs";
import Themes from "../Pages/Themes";
import Portfolio from "../Pages/Portfolio";
import ProjectDetails from "../Component/Portfolio/ProjectDetails";
import WevDev from "../Pages/WevDev";
import AppDev from "../Pages/AppDev";
import ContactSection from "../Pages/ContactSection";

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
        },
        {
            path:'/webdev',
            Component: WevDev
        },
            {
            path:'/appdev',
            Component:AppDev
            },
            {
                path:'/contact',
                Component: ContactSection
            }
    ]
   }
]);

export default router ;
