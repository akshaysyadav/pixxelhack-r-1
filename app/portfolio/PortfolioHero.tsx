'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';

export default function PortfolioHero() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', '2D Animation', '3D Animation', 'Motion Graphics', 'Explainer Videos', 'Game Animation'];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <i className="ri-gallery-line mr-2"></i>
            Our Creative Portfolio
          </motion.div>
          
          <AnimatedText
            text="Showcasing Our Best Work"
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variant="slideUp"
          />
          
          <AnimatedText
            text="Discover the diverse range of animation projects we've crafted for clients across industries, each telling a unique story through the power of visual storytelling."
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            variant="fadeIn"
            delay={0.3}
          />
          
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { number: '250+', label: 'Projects Completed' },
              { number: '85+', label: 'Happy Clients' },
              { number: '12+', label: 'Industries Served' },
              { number: '6', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-purple-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {filters.map((filter) => (
            <RippleEffect key={filter} className="inline-block">
              <button
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50 shadow-md'
                }`}
              >
                {filter}
              </button>
            </RippleEffect>
          ))}
        </motion.div>
      </div>
    </section>
  );
}