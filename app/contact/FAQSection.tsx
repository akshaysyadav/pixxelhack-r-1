'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedText from '@/components/AnimatedText';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity and scope. Simple 2D animations typically take 2-3 weeks, while complex 3D projects can take 6-8 weeks. We always provide detailed timelines during our initial consultation and keep you updated throughout the process.'
    },
    {
      question: 'Do you work with clients internationally?',
      answer: 'Absolutely! We work with clients worldwide and have experience collaborating across different time zones. Our team is equipped with modern communication tools to ensure smooth project coordination regardless of location.'
    },
    {
      question: 'What information do you need to provide a quote?',
      answer: 'We need details about your project scope, target audience, preferred style, timeline, and budget range. The more information you provide about your vision and requirements, the more accurate our quote will be.'
    },
    {
      question: 'Can you work with tight deadlines?',
      answer: 'Yes, we offer rush services for urgent projects. While we always strive to maintain our quality standards, we can often accommodate tight deadlines with proper planning and resource allocation. Rush projects may include additional fees.'
    },
    {
      question: 'What file formats do you deliver?',
      answer: 'We deliver final animations in various formats including MP4, MOV, AVI for video, and source files in the original software format. We also provide different resolutions and aspect ratios as needed for your specific platforms.'
    },
    {
      question: 'Do you provide revisions?',
      answer: 'Yes, all our packages include revision rounds. The number varies by package - Starter includes 2 rounds, Professional includes 4 rounds, and Enterprise includes unlimited revisions. Additional revisions beyond the package limit can be purchased.'
    },
    {
      question: 'Can you help with script writing and concept development?',
      answer: 'Absolutely! Our team includes experienced scriptwriters and concept artists. We can help develop your idea from initial concept through to final script, storyboard, and visual treatment.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, credit cards, and digital payment platforms. For larger projects, we typically work with a 50% upfront payment and 50% upon completion structure.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Frequently Asked Questions"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="Got questions? We've got answers. Here are some common questions our clients ask."
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                    openFAQ === index ? 'transform rotate-180' : ''
                  }`}>
                    <i className="ri-arrow-down-s-line text-xl text-purple-600"></i>
                  </div>
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === index ? 'auto' : 0,
                  opacity: openFAQ === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-question-line text-2xl text-white"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Don't see your question here? We're happy to help with any specific inquiries you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@anitech.studio"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-mail-line mr-2"></i>
              Email Us
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              <i className="ri-phone-line mr-2"></i>
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}