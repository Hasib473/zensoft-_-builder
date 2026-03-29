import React from "react";
import CloudeHero from "../Component/Cloude/CloudeHero";
import CloudeDev from "../Component/Cloude/CloudeDev";
import DeliverSection from "../Component/Web/DeliverSection";
import IndustriesServed from "../Component/Web/IndustriesServed";
import WorkedWith from "../Component/Web/WorkedWith";

const Cloude = () => {
  return (
    <div>
      <div>
        <CloudeHero />
      </div>
      <div>
        <CloudeDev />
      </div>
      <div>
        <DeliverSection />
      </div>
      <div>
        <IndustriesServed />
      </div>

      <div>
        <WorkedWith />
      </div>
    </div>
  );
};

export default Cloude;
