import React from "react";
import uiimg from '../../assets/ui.jpg'

const Uihero = () => {
  return (
    <div>
      <section
        className="max-w-7xl mx-auto h-[60vh] md:h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${uiimg})` }}
      ></section>
    </div>
  );
};

export default Uihero;
