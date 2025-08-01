'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';

export default function PricingSection() {
  const packages = [
    {
      name: 'Starter',
      price: '$2,500',
      duration: '2-3 weeks',
      description: 'Perfect for small businesses and startups looking for professional animation',
      features: [
        'Up to 30-second animation',
        '2D character animation',
        'Basic sound design',
        '2 revision rounds',
        'HD 1080p delivery',
        'Script writing assistance'
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Professional',
      price: '$5,500',
      duration: '3-4 weeks',
      description: 'Comprehensive animation solution for established businesses',
      features: [
        'Up to 60-second animation',
        '3D modeling & animation',
        'Advanced motion graphics',
        '4 revision rounds',
        '4K delivery + multiple formats',
        'Professional voiceover',
        'Custom music & sound effects',
        'Storyboard development'
      ],
      popular: true,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      duration: '4-8 weeks',
      description: 'Tailored solutions for large-scale projects and campaigns',
      features: [
        'Unlimited duration',
        'Full 3D production pipeline',
        'Character design & development',
        'Unlimited revisions',
        'All format delivery',
        'Dedicated project manager',
        'Priority support',
        'Brand integration',
        'Multi-language support'
      ],
      popular: false,
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Transparent Pricing"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="Choose the perfect package for your animation needs with no hidden costs"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative group ${pkg.popular ? 'lg:-mt-4' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <RippleEffect className="block h-full">
                <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden h-full ${
                  pkg.popular ? 'ring-2 ring-purple-500' : ''
                }`}>
                  <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                      {pkg.price !== 'Custom' && <span className="text-gray-500 ml-2">/ project</span>}
                    </div>
                    <p className="text-sm text-gray-500 mb-6">{pkg.duration}</p>
                    <p className="text-gray-600 mb-8">{pkg.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <i className="ri-check-line text-green-500 mr-3"></i>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full bg-gradient-to-r ${pkg.color} text-white py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap`}>
                      {pkg.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                </div>
              </RippleEffect>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-600 mb-6">Not sure which package fits your needs? Let's discuss your project!</p>
          <RippleEffect className="inline-block">
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              Schedule Free Consultation
            </button>
          </RippleEffect>
        </motion.div>
      </div>
    </section>
  );
}