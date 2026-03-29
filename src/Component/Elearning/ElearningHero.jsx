import React from "react";
import elearningimg from '../../assets/Elearning.jpg'

const ElearningHero = () => {
  return (
    <div>
      <section
        className="max-w-7xl mx-auto h-[60vh] md:h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${elearningimg})` }}
      ></section>
    </div>
  );
};

export default ElearningHero;
