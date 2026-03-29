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
import Ai from "../Pages/Ai";
import Ecommerce from "../Pages/Ecommerce";
import Cloude from "../Pages/Cloude";
import Ui from "../Pages/Ui";
import Stesting from "../Pages/Stesting";
import Erp from "../Pages/Erp";
import Elearning from "../Pages/Elearning";

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
            },
            {
                path: '/ai',
                Component: Ai
            },
            {
                path: '/ecom',
                Component: Ecommerce
            },
            {
                path:'/cloud',
                Component: Cloude
            },
            {
                path:'/uiux',
                Component:Ui
            },
            {
                path:'/stesting',
                Component: Stesting
            },
            {
                path:'/erp',
                Component: Erp
            },
            {
                path:'/elearning',
                Component: Elearning
            }
    ]
   }
]);

export default router ;
