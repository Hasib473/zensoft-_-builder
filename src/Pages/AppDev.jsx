import React, { useEffect, useState } from "react";
import WorkedWith from "../Component/Web/WorkedWith";
import IndustriesServed from "../Component/Web/IndustriesServed";
import DeliverSection from "../Component/Web/DeliverSection";
import { FadeLoader } from "react-spinners";
import Apphero from "../Component/App/AppHero";
import MobileAppdev from "../Component/App/MobileAppdev";

const AppDev = () => {

    const [loading , setLoading] = useState(true);

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
            <Apphero/>
        </div>
        <div>
            <MobileAppdev/>
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

export default AppDev;
