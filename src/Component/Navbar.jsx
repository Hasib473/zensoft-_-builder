import React from "react";
import logo from "../assets/zensoft logo.png"
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" navbar  max-w-7xl mx-auto px-4 shadow-2xl mt-2 absolute z-50 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
              <a>About Us</a>
           
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
       <img src={logo} alt="Zensoft Logo" className="h-[60px] w-[100px]" />
      </div>
      <div className="navbar-center  gap-3 hidden lg:flex">
        <ul className="menu text-white  gap-5 menu-horizontal px-1  font-bold">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/service">
            Service
          </NavLink>
          <NavLink to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink to="/about">
            About Us 
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className=" btn btn-primary">Let's Connect</a>
      </div>
    </div>
  );
};

export default Navbar;
