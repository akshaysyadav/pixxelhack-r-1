'use client';

import { motion } from 'framer-motion';
import Marquee from '@/components/Marquee';

export default function ClientLogos() {
  const clients = [
    'TechFlow Inc.', 'EcoLife Products', 'FinanceApp Solutions', 'Pixel Game Studio',
    'MediCare Health', 'RetailChain Stores', 'EduTech Learning', 'StartupHub Accelerator',
    'FoodieApp Kitchen', 'Creative Agency Pro', 'Global Manufacturing', 'Digital Marketing Hub',
    'SoftwareX Solutions', 'Healthcare Plus', 'Entertainment Media', 'Fashion Forward'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to have partnered with amazing companies across various industries
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-purple-50 to-transparent z-10"></div>
          
          <Marquee speed={50} className="py-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-xl shadow-sm mx-6 px-8 py-6 min-w-[200px] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-gray-800 font-semibold text-lg whitespace-nowrap">
                  {client}
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { icon: 'ri-global-line', label: 'Global Reach', value: '28 Countries' },
            { icon: 'ri-building-line', label: 'Industries', value: '12+ Sectors' },
            { icon: 'ri-user-heart-line', label: 'Client Retention', value: '95% Rate' },
            { icon: 'ri-award-line', label: 'Satisfaction', value: '4.9/5 Rating' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className={`${stat.icon} text-xl text-white`}></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}