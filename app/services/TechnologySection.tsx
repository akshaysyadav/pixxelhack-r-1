'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

export default function TechnologySection() {
  const technologies = [
    {
      category: '2D Animation',
      tools: ['Adobe Animate', 'Toon Boom Harmony', 'TVPaint', 'OpenToonz'],
      icon: 'ri-brush-line',
      color: 'from-pink-500 to-purple-600'
    },
    {
      category: '3D Software',
      tools: ['Blender', 'Maya', 'Cinema 4D', 'Houdini'],
      icon: 'ri-3d-view',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      category: 'Motion Graphics',
      tools: ['After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Nuke'],
      icon: 'ri-movie-2-line',
      color: 'from-green-500 to-teal-600'
    },
    {
      category: 'Design Tools',
      tools: ['Photoshop', 'Illustrator', 'Figma', 'Procreate'],
      icon: 'ri-palette-line',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Cutting-Edge Technology"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="We use the latest industry-standard tools and technologies to deliver exceptional results"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${tech.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
                
                <div className="space-y-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center text-gray-600">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      <span className="text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-cloud-line text-2xl text-white"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Cloud Rendering</h4>
              <p className="text-gray-600 text-sm">High-performance cloud infrastructure for faster rendering times</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Secure Pipeline</h4>
              <p className="text-gray-600 text-sm">Enterprise-grade security for all client assets and projects</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-speed-line text-2xl text-white"></i>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600 text-sm">Optimized workflows for quick turnaround without compromising quality</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}