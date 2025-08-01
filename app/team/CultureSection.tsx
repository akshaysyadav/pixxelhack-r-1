'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

export default function CultureSection() {
  const cultureValues = [
    {
      icon: 'ri-heart-3-line',
      title: 'Passion-Driven',
      description: 'We hire people who are genuinely passionate about animation and storytelling.',
      image: 'https://readdy.ai/api/search-image?query=Animation%20team%20members%20showing%20passion%20and%20enthusiasm%20while%20working%20on%20creative%20projects%2C%20diverse%20group%20celebrating%20successful%20project%20completion%2C%20energetic%20and%20inspiring%20creative%20workspace&width=300&height=200&seq=culture-passion&orientation=landscape'
    },
    {
      icon: 'ri-team-line',
      title: 'Collaborative Spirit',
      description: 'Every project benefits from diverse perspectives and collaborative creativity.',
      image: 'https://readdy.ai/api/search-image?query=Animation%20team%20collaboration%20session%20with%20diverse%20professionals%20brainstorming%20together%2C%20creative%20meeting%20with%20storyboards%20and%20concept%20art%2C%20inclusive%20collaborative%20workspace%20environment&width=300&height=200&seq=culture-collab&orientation=landscape'
    },
    {
      icon: 'ri-book-open-line',
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth through workshops, conferences, and training.',
      image: 'https://readdy.ai/api/search-image?query=Animation%20professionals%20attending%20training%20workshop%2C%20learning%20new%20techniques%20and%20software%2C%20educational%20environment%20with%20presentations%20and%20hands-on%20learning%2C%20professional%20development%20setting&width=300&height=200&seq=culture-learning&orientation=landscape'
    },
    {
      icon: 'ri-scales-line',
      title: 'Work-Life Balance',
      description: 'Healthy work-life balance ensures sustained creativity and team wellbeing.',
      image: 'https://readdy.ai/api/search-image?query=Animation%20studio%20with%20relaxation%20area%20and%20flexible%20workspace%2C%20team%20members%20taking%20breaks%20and%20enjoying%20casual%20conversations%2C%20modern%20office%20with%20comfortable%20spaces%20and%20natural%20lighting&width=300&height=200&seq=culture-balance&orientation=landscape'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Excellence Recognition',
      description: 'We celebrate achievements and recognize outstanding contributions to our success.',
      image: 'https://readdy.ai/api/search-image?query=Animation%20team%20award%20ceremony%20celebration%2C%20colleagues%20recognizing%20achievements%20and%20success%2C%20professional%20recognition%20event%20with%20trophies%20and%20appreciation%2C%20inspiring%20workplace%20culture&width=300&height=200&seq=culture-recognition&orientation=landscape'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation Encouraged',
      description: 'Creative freedom and experimentation lead to breakthrough innovations.',
      image: 'https://readdy.ai/api/search-image?query=Innovation%20lab%20in%20animation%20studio%20with%20experimental%20projects%2C%20creative%20professionals%20testing%20new%20techniques%20and%20technologies%2C%20cutting-edge%20animation%20research%20and%20development%20environment&width=300&height=200&seq=culture-innovation&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Our Culture & Values"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="The principles that guide how we work, collaborate, and create together as one team"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cultureValues.map((value, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 h-full">
                <div className="relative h-32 mb-6 rounded-xl overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className={`${value.icon} text-purple-600 text-lg`}></i>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-emotion-happy-line text-2xl text-white"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">96%</div>
              <div className="text-sm text-gray-600">Team Satisfaction</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-heart-line text-2xl text-white"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">4.2</div>
              <div className="text-sm text-gray-600">Years Avg Tenure</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-graduation-cap-line text-2xl text-white"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">40+</div>
              <div className="text-sm text-gray-600">Learning Hours/Year</div>
            </div>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-2xl text-white"></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">15</div>
              <div className="text-sm text-gray-600">Countries Represented</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}