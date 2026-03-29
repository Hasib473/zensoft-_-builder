import React from 'react';
import StestingHero from '../Component/Softwaretesting/StestingHero';
import StestingDev from '../Component/Softwaretesting/StestingDev';
import DeliverSection from '../Component/Web/DeliverSection';
import IndustriesServed from '../Component/Web/IndustriesServed';
import WorkedWith from '../Component/Web/WorkedWith';

const Stesting = () => {
    return (
        <div>
            <div>
                <StestingHero />
            </div>
            <div>
                <StestingDev/>
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

export default Stesting;