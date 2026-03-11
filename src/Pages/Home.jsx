import React from 'react';
import Hero from '../Component/Hero';
import Record from '../Component/Record';
import OurServices from '../Component/OurServices';
import FeaturedProjectsSection from '../Component/FeaturedProjectsSection';
import EcommerceFeatures from '../Component/EcommerceFeatures';
import Technologies from '../Component/Technologies';
import ClientSuccessStories from '../Component/ClientSuccessStories';
import FAQ from '../Component/Faqs';
import PopularThemes from '../Component/PopularThemes';


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
            <div>
                <PopularThemes/>
            </div>
            <div>
                <EcommerceFeatures/>
            </div>
            <div>
                <Technologies/>
            </div>
            <div>
                <ClientSuccessStories/>
            </div>
            <div>
                <FAQ/>
            </div>

        
        </div>
    );
};

export default Home;