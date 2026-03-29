import React, { useEffect, useState } from "react";
import PortfolioComponent from "../Component/Portfolio/PortfolioComponent";
import { FadeLoader, ScaleLoader } from "react-spinners";

const Portfolio = () => {

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
    <div>
      <div>
        <PortfolioComponent />
      </div>
    </div>
  );
};

export default Portfolio;