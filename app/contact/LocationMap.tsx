'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

export default function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Visit Our Studio"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="Located in the heart of San Francisco's creative district, our studio welcomes visitors and clients"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Studio Address</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Main Office</h4>
                    <p className="text-gray-700">123 Creative Avenue</p>
                    <p className="text-gray-700">San Francisco, CA 94102</p>
                    <p className="text-gray-700">United States</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <i className="ri-navigation-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Getting Here</h4>
                    <p className="text-gray-700">2 blocks from Montgomery BART Station</p>
                    <p className="text-gray-700">Street parking available</p>
                    <p className="text-gray-700">Visitor parking in nearby garage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="ri-calendar-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Studio Tours</h4>
                    <p className="text-gray-700">Available by appointment</p>
                    <p className="text-gray-700">Tuesday & Thursday, 2-4 PM</p>
                    <p className="text-gray-700">Book in advance via email</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby landmarks</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <i className="ri-building-line mr-2 text-purple-500"></i>
                  Financial District
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="ri-cup-line mr-2 text-purple-500"></i>
                  Union Square
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="ri-train-line mr-2 text-purple-500"></i>
                  Montgomery BART
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="ri-restaurant-line mr-2 text-purple-500"></i>
                  Chinatown
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0190624261943!2d-122.40520248468189!3d37.78824797975696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5c8f8b2b%3A0x8a1b8b8b8b8b8b8b!2s123%20Montgomery%20St%2C%20San%20Francisco%2C%20CA%2094104!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Anitech Studio Location"
                className="rounded-2xl"
              ></iframe>
              
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Anitech Studio</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}