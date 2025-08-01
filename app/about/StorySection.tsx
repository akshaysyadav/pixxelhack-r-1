'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://readdy.ai/api/search-image?query=Animation%20studio%20founders%20working%20together%20on%20early%20projects%2C%20vintage%20computers%20with%20classic%20animation%20software%2C%20nostalgic%20workspace%20with%20old%20drawing%20tablets%2C%20warm%20lighting%2C%20creative%20partnership%2C%20retro%20animation%20equipment%20and%20hand-drawn%20storyboards%20on%20walls&width=500&height=400&seq=story-founders&orientation=landscape"
              alt="Our Beginning"
              className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
          </motion.div>
          
          <div>
            <AnimatedText
              text="Our Journey Began with a Dream"
              className="text-4xl font-bold text-gray-900 mb-6"
              variant="slideUp"
            />
            
            <motion.div
              className="prose prose-lg text-gray-600 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p>
                Founded in 2018 by Maya Rodriguez and Alex Chen, two passionate animators who met at art school, Anitech started in a small garage with big dreams and even bigger imaginations.
              </p>
              
              <p>
                What began as late-night animation sessions fueled by creativity and countless cups of coffee has evolved into a world-class animation studio that pushes the boundaries of visual storytelling.
              </p>
              
              <p>
                Today, we're proud to have created animations for major brands, independent filmmakers, and everything in between. Our mission remains unchanged: to bring imagination to life, one frame at a time.
              </p>
            </motion.div>
            
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-lightbulb-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600">
                    To become the world's most innovative animation studio, creating content that not only entertains but inspires and educates audiences globally.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}