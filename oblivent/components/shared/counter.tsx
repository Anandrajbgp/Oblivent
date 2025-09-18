"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  isK?: boolean;
  prefix?: string;
  className?: string;
}

export function Counter({
  end,
  suffix = "",
  duration = 2,
  isK = false,
  prefix = "",
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      setCount(0); // Reset count when in view
      const interval = setInterval(() => {
        setCount((prev) => {
          const increment = end / (duration * 60); // 60 FPS
          const next = prev + increment;
          if (next >= end) {
            clearInterval(interval);
            return end;
          }
          return next;
        });
      }, 1000 / 60);

      return () => clearInterval(interval);
    }
  }, [isInView, end, duration]);

  const formatNumber = (num: number) => {
    if (isK && num >= 1000) return Math.floor(num / 1000) + "K";
    if (num >= 10000000) return Math.floor(num / 1000000) + "M"; // For millions
    if (num >= 100000) return Math.floor(num / 1000) + "K"; // For lakhs in Indian format
    return Math.floor(num);
  };

  return (
    <motion.span 
      ref={ref} 
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  );
}

// Helper function for dynamic counts based on days passed
export const getBaseCount = (baseValue: number, startDate: string = "2024-01-01") => {
  const today = new Date();
  const start = new Date(startDate);
  const daysPassed = Math.floor(
    (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  return baseValue + daysPassed;
};