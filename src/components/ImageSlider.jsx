import React, { useEffect, useState } from "react";

const images = [
  "https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg",
  "https://images.pexels.com/photos/3964406/pexels-photo-3964406.jpeg",
  "https://images.pexels.com/photos/2793468/pexels-photo-2793468.jpeg",
  "https://images.pexels.com/photos/632270/pexels-photo-632270.jpeg",
  "https://images.pexels.com/photos/28614061/pexels-photo-28614061/free-photo-of-iconic-pike-place-market-sign-in-seattle-at-dusk.jpeg",
];

const ImageSlider = () => {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      slideImageRight();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideImageLeft = () => {
    setImage((image) => (image < 0 ? images.length - 1 : image - 1));
  };

  const slideImageRight = () => {
    setImage((image) => (image === images.length - 1 ? 0 : image + 1));
  };

  return (
    <div>
      <div className="flex justify-center items-center m-5 p-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
          alt="left-arrow"
          className="w-10 h-10 cursor-pointer"
          onClick={slideImageLeft}
        />
        <img src={images[image]} alt="image1" className="w-[800px] h-[450px]" />
        <img
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
          alt="right-arrow"
          className="w-10 h-10 cursor-pointer"
          onClick={slideImageRight}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
