'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';

export default function CTASection() {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Creative%20animation%20studio%20call-to-action%20background%20with%20inspiring%20workspace%2C%20animated%20characters%20and%20colorful%20visual%20effects%2C%20professional%20creative%20environment%20with%20purple%20and%20blue%20lighting%2C%20motivational%20and%20energetic%20atmosphere&width=1920&height=600&seq=services-cta&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-purple-900/90"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedText
          text="Ready to Bring Your Vision to Life?"
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          variant="slideUp"
        />
        
        <AnimatedText
          text="Join hundreds of satisfied clients who have transformed their ideas into stunning animations. Let's create something amazing together."
          className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
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
              <i className="ri-time-line text-2xl text-white"></i>
            </div>
            <div className="text-white font-semibold">Fast Turnaround</div>
            <div className="text-gray-300 text-sm">2-8 weeks delivery</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-award-line text-2xl text-white"></i>
            </div>
            <div className="text-white font-semibold">Award-Winning</div>
            <div className="text-gray-300 text-sm">47+ industry awards</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-customer-service-2-line text-2xl text-white"></i>
            </div>
            <div className="text-white font-semibold">24/7 Support</div>
            <div className="text-gray-300 text-sm">Dedicated support team</div>
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
            <Link href="/portfolio">
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm whitespace-nowrap">
                <i className="ri-eye-line mr-2"></i>
                View Our Work
              </button>
            </Link>
          </RippleEffect>
        </motion.div>
      </div>
    </section>
  );
}