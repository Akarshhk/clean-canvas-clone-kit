import { useState, useEffect } from 'react';

interface CountUpAnimationProps {
  start: number;
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUpAnimation = ({ start, end, duration = 2000, suffix = "" }: CountUpAnimationProps) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(start + (end - start) * easeOutQuart);
        setCount(currentCount);
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500); // Small delay before starting animation

    return () => clearTimeout(timer);
  }, [start, end, duration]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  );
};

export default CountUpAnimation;