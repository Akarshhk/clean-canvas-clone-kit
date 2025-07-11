import { useState, useEffect } from "react";

interface CountUpAnimationProps {
  start: number;
  end: number;
  duration?: number;
  suffix?: string;
  label?: string; // accessible label for screen readers
}

const CountUpAnimation = ({
  start,
  end,
  duration = 2000,
  suffix = "",
  label
}: CountUpAnimationProps) => {
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
    }, 500); // delay before animation

    return () => clearTimeout(timer);
  }, [start, end, duration]);

  return (
    <div
      role="status"
      aria-label={label || `${end}${suffix}`}
      itemScope
      itemType="https://schema.org/QuantitativeValue"
      className="text-4xl md:text-5xl font-bold text-white"
    >
      <meta itemProp="value" content={end.toString()} />
      <meta itemProp="unitText" content={suffix || "count"} />
      <span aria-hidden="true">{count}{suffix}</span>
    </div>
  );
};

export default CountUpAnimation;
