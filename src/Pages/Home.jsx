import React from 'react';
import Hero from '../Component/Hero';
import Record from '../Component/Record';
import OurServices from '../Component/OurServices';
import FeaturedProjectsSection from '../Component/FeaturedProjectsSection';


const Home = () => {
    return (
        <div>
            <Hero/>
            <div>
                <Record/>
            </div>

            <div>
                <OurServices/>
            </div>

            <div>
                <FeaturedProjectsSection/>
            </div>

        
        </div>
    );
};

export default Home;