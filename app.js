import React, { useState, useEffect } from "react";
import "./styles.css";

const images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202"
];

const Carousel = () => {
  const [angle, setAngle] = useState(0);
  const totalItems = images.length;
  const angleIncrement = 360 / totalItems;

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle - angleIncrement);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `rotateY(${angle}deg)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{
              transform: `rotateY(${index * angleIncrement}deg) translateZ(250px)`,
            }}
          >
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
