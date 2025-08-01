'use client';

import { motion } from 'framer-motion';
import React from 'react';

type MarqueeProps = {
  speed?: number;
  className?: string;
  children?: React.ReactNode;
};

export default function Marquee({ speed = 20, className = '', children }: MarqueeProps) {
  const marqueeText =
    typeof children === 'string'
      ? children
      : "Creating Magic Frame by Frame • Animation is Emotion • Crafting Visual Wonders • ";

  return (
    <div className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 overflow-hidden relative ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {Array(10).fill(marqueeText).map((text, index) => (
          <span key={index} className="text-lg font-medium px-4">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
