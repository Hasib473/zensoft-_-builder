import React from 'react';
import ElearningHero from '../Component/Elearning/ElearningHero';
import ElearningDev from '../Component/Elearning/ElearningDev';
import DeliverSection from '../Component/Web/DeliverSection';
import IndustriesServed from '../Component/Web/IndustriesServed';
import WorkedWith from '../Component/Web/WorkedWith';

const Elearning = () => {
    return (
        <div>
            <div>
                <ElearningHero/>
            </div>
            <div>
                <ElearningDev/>
            </div>
             <div>
                <DeliverSection/>
            </div>
            <div>
                <IndustriesServed/>
            </div>
            
            <div>
                <WorkedWith/>
            </div>

        </div>
    );
};

export default Elearning;