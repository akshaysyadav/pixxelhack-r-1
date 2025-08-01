'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';
import ParticleTrail from '@/components/ParticleTrail';

export default function ServicesHero() {
  return (
    <section 
      className="relative pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20animation%20studio%20services%20showcase%20with%20multiple%20workstations%20displaying%202D%20animation%2C%203D%20modeling%20and%20motion%20graphics%20projects%2C%20creative%20workspace%20with%20colorful%20animated%20characters%20on%20screens%2C%20modern%20professional%20environment%20with%20purple%20and%20blue%20lighting&width=1920&height=1080&seq=services-hero&orientation=landscape')`,
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
          <i className="ri-service-line mr-2"></i>
          Our Creative Services
        </motion.div>
        
        <AnimatedText
          text="Transform Your Vision Into Stunning Reality"
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          variant="slideUp"
        />
        
        <AnimatedText
          text="From concept to completion, we deliver world-class animation services that captivate audiences and bring your stories to life with unparalleled creativity and technical excellence."
          className="text-xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
          variant="fadeIn"
          delay={0.3}
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { icon: 'ri-brush-line', label: '2D Animation', count: '100+' },
            { icon: 'ri-3d-view', label: '3D Projects', count: '80+' },
            { icon: 'ri-movie-2-line', label: 'Motion Graphics', count: '70+' }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className={`${item.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{item.count}</div>
              <div className="text-gray-300 text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <RippleEffect className="inline-block">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap">
              <i className="ri-play-circle-line mr-2"></i>
              View Our Work
            </button>
          </RippleEffect>
          <RippleEffect className="inline-block">
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              Get Free Quote
            </button>
          </RippleEffect>
        </motion.div>
      </div>
    </section>
  );
}