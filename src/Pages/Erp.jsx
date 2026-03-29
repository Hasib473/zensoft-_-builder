import React from 'react';
import ErpHero from '../Component/ERP/ErpHero';
import ErpDev from '../Component/ERP/ErpDev';
import DeliverSection from '../Component/Web/DeliverSection';
import IndustriesServed from '../Component/Web/IndustriesServed';
import WorkedWith from '../Component/Web/WorkedWith';

const Erp = () => {
    return (
        <div>
            <div>
                <ErpHero/>
            </div>
            <div>
                <ErpDev/>
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

export default Erp;