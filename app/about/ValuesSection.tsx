'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We constantly push the boundaries of animation technology and storytelling techniques to deliver cutting-edge visual experiences.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaboration',
      description: 'Our diverse team of artists, animators, and storytellers work together to bring unique perspectives to every project.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-heart-3-line',
      title: 'Passion',
      description: 'Every frame we create is infused with genuine love for the craft of animation and dedication to artistic excellence.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: 'ri-award-line',
      title: 'Quality',
      description: 'We never compromise on quality, ensuring every project meets the highest standards of visual and narrative excellence.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'ri-magic-line',
      title: 'Creativity',
      description: 'We believe in the power of imagination and strive to create animations that surprise, delight, and inspire audiences.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Client Focus',
      description: 'Your vision is our mission. We work closely with clients to ensure their stories are told exactly as they imagine.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Our Core Values"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="The principles that guide everything we do and every story we tell"
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-gray-100 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r ${value.color} rounded-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}