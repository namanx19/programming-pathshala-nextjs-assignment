"use client";
import { useState, useEffect, useCallback } from "react";
import CarouselCard from "./CarouselCard";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      text: "Lessons and insights from 8 years",
      buttonText: "Register",
      imageSrc: "/carousel/carousel_img1.png",
    },
    {
      text: "Another Insight",
      buttonText: "Learn More",
      imageSrc: "/carousel/carousel_img1.png",
    },
    {
      text: "More Lessons",
      buttonText: "Join Now",
      imageSrc: "/carousel/carousel_img1.png",
    },
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    target.style.cursor = "grabbing";
    setIsDragging(true);
    setStartX(e.clientX);
  }, []);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    target.style.cursor = "default";
    setIsDragging(false);
    setStartX(null);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging && startX !== null) {
        const currentDistance = e.clientX - startX;

        if (currentDistance > 0) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        } else {
          setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) return cards.length - 1;
            return (prevIndex - 1) % cards.length;
          });
        }

        setStartX(null);
      }
    },
    [isDragging, startX, cards.length]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [cards.length]);

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
        {cards.map((card, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <CarouselCard {...card} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 w-full flex flex-row justify-center gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
