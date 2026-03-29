import React from "react";
import Uihero from "../Component/UiUx/Uihero";
import UiDev from "../Component/UiUx/UiDev";
import DeliverSection from "../Component/Web/DeliverSection";
import IndustriesServed from "../Component/Web/IndustriesServed";
import WorkedWith from "../Component/Web/WorkedWith";

const Ui = () => {
  return (
    <>
      <div>
        <Uihero />
      </div>
      <div>
        <UiDev />
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
    </>
  );
};

export default Ui;
