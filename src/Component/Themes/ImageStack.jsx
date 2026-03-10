import React from "react";

import img1 from "../../assets/imgstack1.png"
import img2 from "../../assets/imgstack2.png";
import img3 from "../../assets/imgstack3.png";
import img4 from "../../assets/imgstack4.png";

const ImageStack = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="w-full">
      {images.map((img, index) => (
        <div key={index} className="w-full">
          <img
            src={img}
            alt={`stack-img-${index}`}
            className="w-full h-full object-cover block"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageStack;