import React from 'react';
import heroBg from '../../assets/mobileapp.jpg'

const Apphero = () => {
    return (
    <section
      className="max-w-7xl mx-auto h-[50vh] md:h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
    </section>
  );
};

export default Apphero;