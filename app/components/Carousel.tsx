"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/carousel/image1.png",
    "/carousel/image1.png",
    "/carousel/image1.png",
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);

  const handleMouseDown = useCallback((e: any) => {
    e.currentTarget.style.cursor = "grabbing";
    setIsDragging(true);
    setStartX(e.clientX);
  }, []);

  const handleMouseUp = useCallback((e: any) => {
    e.currentTarget.style.cursor = "default";
    setIsDragging(false);
    setStartX(null);
  }, []);

  const handleMouseMove = useCallback(
    (e: any) => {
      if (isDragging && startX !== null) {
        console.log(e.clientX - startX);
        const currentDistance = -1 * (e.clientX - startX);

        if (currentDistance > 0) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else {
          setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) return images.length - 1;
            return (prevIndex - 1) % images.length;
          });
        }

        setStartX(null);
      }
    },
    [isDragging, startX]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  },);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={src}
              width={2000}
              height={2000}
              alt={`hero ${index + 1}`}
              className="w-screen object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 w-full flex flex-row justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-primary  " : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;