'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';
import GreetingCharacter from '@/components/GreetingCharacter';


export default function AboutHero() {
  return (
    <section 
      className="relative pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-blue-50 to-white overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Creative%20animation%20studio%20team%20brainstorming%20session%20with%20diverse%20professionals%20discussing%20storyboards%20and%20concepts%2C%20modern%20collaborative%20workspace%20with%20large%20windows%2C%20natural%20lighting%2C%20artistic%20drawings%20on%20walls%2C%20purple%20and%20blue%20ambient%20lighting%2C%20inspiring%20creative%20environment%20with%20animation%20equipment%20and%20digital%20displays&width=1920&height=1080&seq=about-hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-purple-50/80 to-blue-50/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <i className="ri-heart-3-line mr-2"></i>
              Our Story
            </motion.div>
            
            <AnimatedText
              text="Passionate Creators Behind Every Frame"
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              variant="slideUp"
            />
            
            <AnimatedText
              text="Since 2018, we've been transforming ideas into breathtaking animations that captivate audiences and bring stories to life."
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              variant="fadeIn"
              delay={0.3}
            />
            
            <motion.div
              className="flex flex-wrap gap-6 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-team-line text-purple-600"></i>
                </div>
                <div>
                  <div className="font-semibold">50+ Talented Artists</div>
                  <div className="text-sm text-gray-500">Creative professionals</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-trophy-line text-blue-600"></i>
                </div>
                <div>
                  <div className="font-semibold">200+ Projects</div>
                  <div className="text-sm text-gray-500">Successfully delivered</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <RippleEffect className="inline-block">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                  <i className="ri-play-circle-line mr-2"></i>
                  Watch Our Journey
                </button>
              </RippleEffect>
              <RippleEffect className="inline-block">
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  <i className="ri-download-line mr-2"></i>
                  Download Portfolio
                </button>
              </RippleEffect>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Animation%20studio%20workspace%20showing%20creative%20process%20from%20concept%20sketches%20to%20final%203D%20renders%2C%20multiple%20monitors%20displaying%20colorful%20character%20designs%2C%20storyboards%2C%20and%20animation%20software%20interfaces%2C%20professional%20creative%20environment%20with%20purple%20and%20blue%20lighting%20accents&width=600&height=500&seq=about-process&orientation=portrait"
                alt="Creative Process"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-2xl opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <GreetingCharacter />
    </section>
  );
}