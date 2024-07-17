"use client";
import React, { useState, useEffect, useRef } from "react";

const CounterAnimation = ({
  startValue = 0,
  endValue = 10,
  duration = 5000,
}) => {
  const [count, setCount] = useState(startValue);
  const [isVisible, setIsVisible] = useState(false);
  const startTime = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElementRef = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentElementRef) {
      observer.observe(currentElementRef);
    }

    return () => {
      if (currentElementRef) {
        observer.unobserve(currentElementRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;

      if (progress < duration) {
        const newCount = Math.round(
          startValue + (progress / duration) * (endValue - startValue)
        );
        setCount(newCount);
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isVisible, startValue, endValue, duration]);

  return (
    <div ref={elementRef}>
      <h2 className="font-bold text-2xl text-neutral-dGrey">{count}</h2>
    </div>
  );
};

export default CounterAnimation;
