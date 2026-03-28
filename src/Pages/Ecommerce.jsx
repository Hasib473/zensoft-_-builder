import React from 'react';
import EcommerceHero from '../Component/ECommerceComponent/EcommerceHero';
import EcDev from '../Component/ECommerceComponent/EcDev';
import DeliverSection from '../Component/Web/DeliverSection';
import IndustriesServed from '../Component/Web/IndustriesServed';
import WorkedWith from '../Component/Web/WorkedWith';

const Ecommerce = () => {
    return (
        <div>
            <div>
                <EcommerceHero/>
            </div>

            <div>
                <EcDev/>
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

export default Ecommerce;