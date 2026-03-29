import React from 'react';
import cloudeimg from '../../assets/cloudeimg.jpg'

const CloudeHero = () => {
    return (
        <div>
             <section
                  className="max-w-7xl mx-auto h-[60vh] md:h-[80vh] bg-cover bg-center"
                  style={{ backgroundImage: `url(${cloudeimg})` }}
                >
                </section>
        </div>
    );
};

export default CloudeHero;