import React, { useEffect, useState } from "react";
import AboutSection from "../Component/AboutUs/AboutSection";
import LeadershipTeam from "../Component/AboutUs/LeaderShipTeam";
import CallToAction from "../Component/AboutUs/CallToAction";
import { FadeLoader } from "react-spinners";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

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
        <AboutSection />
      </div>

      <div>
        <LeadershipTeam />
      </div>

      <div>
        <CallToAction />
      </div>
    </div>
  );
};

export default AboutUs;