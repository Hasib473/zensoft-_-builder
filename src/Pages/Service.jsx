import React from 'react';
import Hero from '../Component/Hero';
import ServicesSection from '../Component/Services/Services';
import ProcessSection from '../Component/Services/ProcesSection';
import FeaturesSection from '../Component/Services/FeatureSection';
import Technologies from '../Component/Services/Technologies';
import PopularThemes from '../Component/PopularThemes';

const Service = () => {
    return (
        <>
        <div className=''>
            <ServicesSection/>
        </div>
        <div>
            <PopularThemes/>
        </div>

        <div>
            <ProcessSection/>
        </div>
        <div>
            <FeaturesSection/>
        </div>

        <div>
            <Technologies/>
        </div>
        </>
    );
};

export default Service;