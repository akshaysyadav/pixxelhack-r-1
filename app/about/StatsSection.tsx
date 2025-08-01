'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = Date.now();
    let animationFrame: number;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    updateCount();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function StatsSection() {
  const stats = [
    {
      icon: 'ri-trophy-line',
      number: 47,
      suffix: '+',
      label: 'Awards Won',
      description: 'International recognition'
    },
    {
      icon: 'ri-film-line',
      number: 250,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Across various industries'
    },
    {
      icon: 'ri-team-line',
      number: 52,
      suffix: '',
      label: 'Team Members',
      description: 'Creative professionals'
    },
    {
      icon: 'ri-global-line',
      number: 28,
      suffix: '',
      label: 'Countries Served',
      description: 'Worldwide clientele'
    },
    {
      icon: 'ri-time-line',
      number: 15000,
      suffix: '+',
      label: 'Hours Animated',
      description: 'Pure creativity'
    },
    {
      icon: 'ri-heart-3-line',
      number: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Happy customers'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Six years of dedication, creativity, and countless hours of bringing imagination to life
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                <Counter end={stat.number} duration={2} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}