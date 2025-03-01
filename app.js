import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const images = [
  "https://picsum.photos/600/200",
  "https://picsum.photos/600/201",
  "https://picsum.photos/600/202",
  "https://picsum.photos/600/203",
  "https://picsum.photos/600/204",
  "https://picsum.photos/600/205",
];

const Carousel = () => {
  const [angle, setAngle] = useState(0);
  const totalItems = images.length;
  const angleIncrement = 360 / totalItems;
  const carouselRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setAngle((prevAngle) => (prevAngle - angleIncrement) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [angleIncrement]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        ref={carouselRef}
        style={{ transform: `rotateY(${angle}deg)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{
              transform: `rotateY(${index * angleIncrement}deg) translateZ(400px)`,
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
