import React from 'react';
import AboutSection from '../Component/AboutUs/AboutSection';
import LeadershipTeam from '../Component/AboutUs/LeaderShipTeam';
import CallToAction from '../Component/AboutUs/CallToAction';

const AboutUs = () => {
    return (
        <div>
         <div>
            <AboutSection/>
         </div>
         <div>
            <LeadershipTeam/>
         </div>
         <div>
            <CallToAction/>
         </div>
        </div>
    );
};

export default AboutUs;