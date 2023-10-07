import React, { useState, useEffect } from "react";

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <img
      src={images[currentIndex]}
      alt={`Image ${currentIndex + 1}`}
      width={"100%"}
    />
  );
};

export default ImageSlider;
