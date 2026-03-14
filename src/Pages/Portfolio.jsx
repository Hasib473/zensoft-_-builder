import React, { useEffect, useState } from "react";
import PortfolioComponent from "../Component/Portfolio/PortfolioComponent";
import { FadeLoader } from "react-spinners";

const Portfolio = () => {

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
        <FadeLoader/>
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