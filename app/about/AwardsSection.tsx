'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';

export default function AwardsSection() {
  const awards = [
    {
      year: '2024',
      title: 'Best Animation Studio',
      organization: 'Global Animation Awards',
      category: 'Studio Excellence',
      image: 'https://readdy.ai/api/search-image?query=Golden%20animation%20award%20trophy%20with%20modern%20design%2C%20elegant%20award%20ceremony%20backdrop%2C%20prestigious%20animation%20industry%20recognition%2C%20professional%20award%20presentation%20setting%20with%20purple%20and%20blue%20lighting&width=200&height=150&seq=award-2024&orientation=portrait'
    },
    {
      year: '2023',
      title: 'Outstanding Character Design',
      organization: 'International Design Festival',
      category: 'Character Animation',
      image: 'https://readdy.ai/api/search-image?query=Crystal%20award%20trophy%20for%20character%20design%20excellence%2C%20creative%20animation%20industry%20recognition%2C%20artistic%20achievement%20award%20with%20colorful%20lighting%2C%20professional%20ceremony%20presentation&width=200&height=150&seq=award-2023&orientation=portrait'
    },
    {
      year: '2023',
      title: 'Innovation in Animation',
      organization: 'Tech Animation Summit',
      category: 'Technology Innovation',
      image: 'https://readdy.ai/api/search-image?query=Modern%20tech%20innovation%20award%20trophy%20for%20animation%20technology%2C%20futuristic%20award%20design%20with%20digital%20elements%2C%20cutting-edge%20animation%20recognition%2C%20professional%20technology%20summit%20presentation&width=200&height=150&seq=award-tech-2023&orientation=portrait'
    },
    {
      year: '2022',
      title: 'Best Commercial Animation',
      organization: 'Advertising Creative Awards',
      category: 'Commercial Excellence',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20commercial%20animation%20award%20trophy%2C%20advertising%20industry%20recognition%2C%20creative%20excellence%20award%20with%20sophisticated%20design%2C%20professional%20advertising%20ceremony%20backdrop&width=200&height=150&seq=award-2022&orientation=portrait'
    },
    {
      year: '2021',
      title: 'Rising Star Studio',
      organization: 'Animation Industry Council',
      category: 'Emerging Excellence',
      image: 'https://readdy.ai/api/search-image?query=Rising%20star%20award%20trophy%20with%20dynamic%20design%2C%20emerging%20talent%20recognition%20in%20animation%20industry%2C%20stylish%20award%20presentation%20with%20purple%20and%20blue%20elements%2C%20professional%20ceremony%20setting&width=200&height=150&seq=award-2021&orientation=portrait'
    },
    {
      year: '2021',
      title: 'Best Storytelling',
      organization: 'Creative Narrative Awards',
      category: 'Narrative Excellence',
      image: 'https://readdy.ai/api/search-image?query=Storytelling%20excellence%20award%20trophy%20with%20artistic%20book%20design%20elements%2C%20creative%20narrative%20recognition%2C%20literary%20and%20visual%20arts%20award%2C%20elegant%20ceremony%20presentation%20with%20warm%20lighting&width=200&height=150&seq=award-story-2021&orientation=portrait'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Recognition & Awards"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="Our commitment to excellence has been recognized by industry leaders worldwide"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <RippleEffect className="block h-full">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 h-full">
                  <div className="text-center mb-4">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-20 h-24 object-cover object-top mx-auto rounded-lg shadow-md"
                    />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-600 mb-2">{award.year}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{award.organization}</p>
                    <p className="text-xs text-gray-500">{award.category}</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-purple-100">
                    <div className="flex justify-center">
                      <i className="ri-award-line text-2xl text-purple-500 group-hover:text-yellow-500 transition-colors duration-300"></i>
                    </div>
                  </div>
                </div>
              </RippleEffect>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center space-x-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">47+</div>
              <div className="text-sm text-gray-600">Total Awards</div>
            </div>
            <div className="w-px h-12 bg-purple-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Organizations</div>
            </div>
            <div className="w-px h-12 bg-purple-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">6</div>
              <div className="text-sm text-gray-600">Consecutive Years</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}