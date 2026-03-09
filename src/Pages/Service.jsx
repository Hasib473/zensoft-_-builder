import React from 'react';
import Hero from '../Component/Hero';
import ServicesSection from '../Component/Services/Services';
import ProcessSection from '../Component/Services/ProcesSection';
import FeaturesSection from '../Component/Services/FeatureSection';
import Technologies from '../Component/Services/Technologies';

const Service = () => {
    return (
        <>
        <div className=''>
            <ServicesSection/>
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