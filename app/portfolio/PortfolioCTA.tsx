'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';

export default function PortfolioCTA() {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Creative%20animation%20studio%20workspace%20with%20inspiring%20portfolio%20showcase%20wall%2C%20multiple%20screens%20displaying%20colorful%20animations%2C%20professional%20creative%20environment%20with%20purple%20and%20blue%20lighting%2C%20motivational%20and%20artistic%20atmosphere&width=1920&height=600&seq=portfolio-cta&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-purple-900/90"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedText
          text="Ready to Create Your Next Masterpiece?"
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          variant="slideUp"
        />
        
        <AnimatedText
          text="Join the ranks of successful clients who have transformed their vision into captivating animations. Let's bring your story to life with the same creativity and excellence."
          className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          variant="fadeIn"
          delay={0.2}
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-eye-line text-2xl text-white"></i>
            </div>
            <div className="text-white font-semibold">Free Consultation</div>
            <div className="text-gray-300 text-sm">Discuss your vision</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-pencil-ruler-line text-2xl text-white"></i>
            </div>
            <div className="text-white font-semibold">Custom Quote</div>
            <div className="text-gray-300 text-sm">Tailored pricing</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-rocket-line text-2xl text-white"></i>
            </div>
            <div className="text-white font-semibold">Quick Start</div>
            <div className="text-gray-300 text-sm">Begin in 48 hours</div>
          </div>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <RippleEffect className="inline-block">
            <Link href="/contact">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap">
                <i className="ri-send-plane-line mr-2"></i>
                Start Your Project
              </button>
            </Link>
          </RippleEffect>
          <RippleEffect className="inline-block">
            <Link href="/services">
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm whitespace-nowrap">
                <i className="ri-service-line mr-2"></i>
                View Services
              </button>
            </Link>
          </RippleEffect>
        </motion.div>
      </div>
    </section>
  );
}