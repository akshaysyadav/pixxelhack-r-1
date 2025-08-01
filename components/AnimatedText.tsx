'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: 'fadeIn' | 'slideUp' | 'typing';
  delay?: number;
}

export default function AnimatedText({ 
  text, 
  className = '', 
  variant = 'fadeIn', 
  delay = 0 
}: AnimatedTextProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getAnimation = () => {
    switch (variant) {
      case 'slideUp':
        return {
          initial: { y: 50, opacity: 0 },
          animate: inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
          transition: { duration: 0.8, delay }
        };
      case 'typing':
        return {
          initial: { width: 0 },
          animate: inView ? { width: 'auto' } : { width: 0 },
          transition: { duration: 1.5, delay }
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: inView ? { opacity: 1 } : { opacity: 0 },
          transition: { duration: 0.8, delay }
        };
    }
  };

  if (variant === 'typing') {
    return (
      <div ref={ref} className="overflow-hidden">
        <motion.div
          className={`whitespace-nowrap ${className}`}
          {...getAnimation()}
        >
          {text}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      {...getAnimation()}
    >
      {text}
    </motion.div>
  );
}