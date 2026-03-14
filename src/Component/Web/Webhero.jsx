import React from 'react';
import heroBg from '../../assets/webhero.jpg'

const Webhero = () => {
    return (
    <section
      className="max-w-7xl mx-auto h-[60vh] md:h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
    </section>
  );
};

export default Webhero;