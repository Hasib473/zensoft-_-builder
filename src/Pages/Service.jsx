import React from 'react';
import Hero from '../Component/Hero';
import ServicesSection from '../Component/Services/Services';
import ProcessSection from '../Component/Services/ProcesSection';

const Service = () => {
    return (
        <>
        <div className=''>
            <ServicesSection/>
        </div>

        <div>
            <ProcessSection/>
        </div>
        </>
    );
};

export default Service;