import React, { useEffect, useState } from 'react';
import Webhero from '../Component/Web/Webhero';
import WebAppDevelopment from '../Component/Web/WebAppDevelopment';
import DeliverSection from '../Component/Web/DeliverSection';
import IndustriesServed from '../Component/Web/IndustriesServed';
import WorkedWith from '../Component/Web/WorkedWith';
import { FadeLoader } from 'react-spinners';

const WevDev = () => {
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
            <FadeLoader />
      </div>
    );
  }


    return (
        <div>
           <div>
            <Webhero/>
           </div>
           <div>
            <WebAppDevelopment/>
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

export default WevDev;