'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

export default function ProcessSection() {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your vision, target audience, and project goals to create a comprehensive creative brief.',
      icon: 'ri-lightbulb-line',
      details: ['Client consultation', 'Audience research', 'Creative brief development', 'Timeline planning']
    },
    {
      step: '02',
      title: 'Concept Development',
      description: 'Our team develops initial concepts, storyboards, and style guides that align with your brand and message.',
      icon: 'ri-pencil-ruler-line',
      details: ['Concept sketches', 'Storyboard creation', 'Style guide development', 'Character design']
    },
    {
      step: '03',
      title: 'Production Phase',
      description: 'We bring concepts to life through meticulous animation, utilizing cutting-edge tools and techniques.',
      icon: 'ri-play-circle-line',
      details: ['Asset creation', 'Animation production', 'Sound integration', 'Quality assurance']
    },
    {
      step: '04',
      title: 'Review & Refinement',
      description: 'Collaborative review process with client feedback integration to ensure the final product exceeds expectations.',
      icon: 'ri-search-eye-line',
      details: ['Client preview', 'Feedback incorporation', 'Revisions', 'Final approval']
    },
    {
      step: '05',
      title: 'Delivery & Support',
      description: 'Final delivery in all required formats with ongoing support for any additional needs or modifications.',
      icon: 'ri-rocket-line',
      details: ['Format delivery', 'Asset handover', 'Usage guidelines', 'Ongoing support']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Our Creative Process"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="A proven methodology that ensures exceptional results from concept to completion"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-300 via-blue-300 to-purple-300 rounded-full"></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:mb-20`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-6">
                      <i className={`${step.icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-purple-600 mb-1">{step.step}</div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                        <i className="ri-arrow-right-line text-purple-500 mr-2 text-xs"></i>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-purple-500 rounded-full z-10">
                <div className="w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>

              <div className="w-full md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}