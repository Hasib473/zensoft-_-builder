import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;