'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
  const marqueeText = "Creating Magic Frame by Frame • Animation is Emotion • Crafting Visual Wonders • ";
  
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 overflow-hidden relative">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
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