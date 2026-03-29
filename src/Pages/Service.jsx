import React, { useEffect, useState } from "react";
import Hero from "../Component/Hero";
import ServicesSection from "../Component/Services/Services";
import ProcessSection from "../Component/Services/ProcesSection";
import FeaturesSection from "../Component/Services/FeatureSection";
import Technologies from "../Component/Services/Technologies";
import PopularThemes from "../Component/PopularThemes";
import { FadeLoader, ScaleLoader } from "react-spinners";

const Service = () => {

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
        <ScaleLoader />
      </div>
    );
  }

  return (
    <>
      <div>
        <ServicesSection />
      </div>

      <div>
        <PopularThemes />
      </div>

      <div>
        <ProcessSection />
      </div>

      <div>
        <FeaturesSection />
      </div>

      <div>
        <Technologies />
      </div>
    </>
  );
};

export default Service;