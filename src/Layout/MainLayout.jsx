import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <>
    <div className="relative">
      <Navbar />
      <Outlet />
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default MainLayout;