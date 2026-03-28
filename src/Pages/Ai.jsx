import React from 'react';
import Aihero from '../Component/Ai/Aihero';
import AiDevlopment from '../Component/Ai/AiDevelopment';
import DeliverSection from '../Component/Web/DeliverSection';
import IndustriesServed from '../Component/Web/IndustriesServed';
import WorkedWith from '../Component/Web/WorkedWith';

const Ai = () => {
    return (
        <div>
            <div>
            <Aihero/>
            </div>

            <div>
                <AiDevlopment/>
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

export default Ai;