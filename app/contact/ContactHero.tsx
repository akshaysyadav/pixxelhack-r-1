'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import ParticleTrail from '@/components/ParticleTrail';

export default function ContactHero() {
  return (
    <section 
      className="relative pt-24 pb-16 min-h-[60vh] flex items-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20animation%20studio%20contact%20and%20communication%20background%2C%20professional%20consultation%20setup%20with%20team%20ready%20to%20discuss%20projects%2C%20welcoming%20creative%20workspace%20environment%20with%20purple%20and%20blue%20lighting&width=1920&height=600&seq=contact-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-indigo-900/90"></div>
      <ParticleTrail />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <i className="ri-customer-service-2-line mr-2"></i>
          Let's Work Together
        </motion.div>
        
        <AnimatedText
          text="Ready to Bring Your Vision to Life?"
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          variant="slideUp"
        />
        
        <AnimatedText
          text="Get in touch with our creative team to discuss your animation project. We're here to transform your ideas into stunning visual stories."
          className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
          variant="fadeIn"
          delay={0.3}
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { icon: 'ri-phone-line', title: 'Call Us', info: '+1 (555) 123-4567' },
            { icon: 'ri-mail-line', title: 'Email Us', info: 'hello@anitech.studio' },
            { icon: 'ri-time-line', title: 'Response Time', info: 'Within 24 hours' }
          ].map((contact, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className={`${contact.icon} text-2xl text-white`}></i>
              </div>
              <div className="text-white font-semibold mb-1">{contact.title}</div>
              <div className="text-gray-300 text-sm">{contact.info}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}