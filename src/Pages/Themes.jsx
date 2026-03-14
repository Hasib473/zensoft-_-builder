import React, { useEffect, useState } from "react";
import ThemeProduct from "../Component/Themes/ThemeProduct";
import RatingSection from "../Component/Themes/RatingSection";
import ImageStack from "../Component/Themes/ImageStack";
import FeatureGrid from "../Component/Themes/FeatureGrid";
import Specifications from "../Component/Themes/Specifications";
import { FadeLoader } from "react-spinners";

const Themes = () => {

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
        <ThemeProduct />
      </div>

      <div>
        <RatingSection />
      </div>

      <div>
        <ImageStack />
      </div>

      <div>
        <FeatureGrid />
      </div>

      <div>
        <Specifications />
      </div>

    </div>
  );
};

export default Themes;