'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import ParticleTrail from '@/components/ParticleTrail';

export default function TeamHero() {
  return (
    <section 
      className="relative pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Diverse%20creative%20team%20of%20animation%20professionals%20working%20together%20in%20modern%20studio%2C%20collaborative%20workspace%20with%20multiple%20workstations%2C%20colorful%20animated%20projects%20on%20screens%2C%20inspiring%20creative%20environment%20with%20purple%20and%20blue%20lighting&width=1920&height=1080&seq=team-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-indigo-900/90"></div>
      <ParticleTrail />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <i className="ri-team-line mr-2"></i>
          Meet Our Amazing Team
        </motion.div>
        
        <AnimatedText
          text="The Creative Minds Behind the Magic"
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          variant="slideUp"
        />
        
        <AnimatedText
          text="Our diverse team of 52 talented professionals brings together years of experience, boundless creativity, and a shared passion for transforming ideas into breathtaking animated stories."
          className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          variant="fadeIn"
          delay={0.3}
        />
        
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { number: '52', label: 'Team Members', icon: 'ri-team-line' },
            { number: '15+', label: 'Countries', icon: 'ri-global-line' },
            { number: '8', label: 'Departments', icon: 'ri-building-line' },
            { number: '6', label: 'Years Together', icon: 'ri-calendar-line' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className={`${stat.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-gray-200 text-lg mb-6">
            "Creativity is not just our job - it's our passion, our purpose, and our promise to every client we serve."
          </p>
          <div className="flex items-center justify-center space-x-4 text-gray-300">
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <span className="text-sm">Maya Rodriguez & Alex Chen, Co-Founders</span>
            <div className="w-12 h-0.5 bg-gray-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}