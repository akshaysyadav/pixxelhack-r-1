'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

export default function TimelineSection() {
  const milestones = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Maya and Alex founded Anitech in a small garage, armed with passion and two old computers.',
      icon: 'ri-rocket-line',
      image: 'https://readdy.ai/api/search-image?query=Small%20garage%20converted%20into%20animation%20studio%20workspace%2C%20two%20founders%20working%20on%20old%20computers%20with%20animation%20software%2C%20vintage%20setup%20with%20purple%20and%20blue%20lighting%2C%20early%20startup%20atmosphere%2C%20creative%20chaos%20with%20storyboards%20and%20sketches%20everywhere&width=300&height=200&seq=timeline-2018&orientation=landscape'
    },
    {
      year: '2019',
      title: 'First Major Project',
      description: 'Completed our first commercial animation for a tech startup, marking our entry into the professional market.',
      icon: 'ri-trophy-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20animation%20studio%20setup%20with%20team%20celebrating%20first%20major%20project%20completion%2C%20modern%20workspace%20with%20multiple%20monitors%20showing%20colorful%20animations%2C%20success%20celebration%20atmosphere%2C%20purple%20and%20blue%20themed%20office%20space&width=300&height=200&seq=timeline-2019&orientation=landscape'
    },
    {
      year: '2020',
      title: 'Team Expansion',
      description: 'Grew to a team of 15 talented artists and moved to our first official studio space.',
      icon: 'ri-team-line',
      image: 'https://readdy.ai/api/search-image?query=Animation%20studio%20office%20space%20with%20diverse%20team%20of%2015%20creative%20professionals%20working%20together%2C%20modern%20open%20workspace%20design%2C%20collaborative%20environment%20with%20animation%20workstations%2C%20purple%20and%20blue%20color%20scheme%2C%20professional%20creative%20atmosphere&width=300&height=200&seq=timeline-2020&orientation=landscape'
    },
    {
      year: '2021',
      title: 'Award Recognition',
      description: 'Won our first international animation award for excellence in character design and storytelling.',
      icon: 'ri-award-line',
      image: 'https://readdy.ai/api/search-image?query=Animation%20award%20ceremony%20with%20team%20receiving%20international%20recognition%20trophy%2C%20professional%20event%20with%20purple%20and%20blue%20lighting%2C%20celebration%20of%20creative%20excellence%2C%20award%20presentation%20on%20stage%20with%20studio%20team&width=300&height=200&seq=timeline-2021&orientation=landscape'
    },
    {
      year: '2022',
      title: 'Global Reach',
      description: 'Expanded internationally, working with clients from 20+ countries across various industries.',
      icon: 'ri-global-line',
      image: 'https://readdy.ai/api/search-image?query=Animation%20studio%20with%20world%20map%20showing%20global%20client%20connections%2C%20international%20collaboration%20setup%20with%20video%20conferences%2C%20diverse%20projects%20from%20different%20countries%20displayed%20on%20screens%2C%20modern%20global%20business%20environment&width=300&height=200&seq=timeline-2022&orientation=landscape'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Established our current state-of-the-art facility with 50+ team members and cutting-edge technology.',
      icon: 'ri-magic-line',
      image: 'https://readdy.ai/api/search-image?query=State-of-the-art%20animation%20studio%20facility%20with%2050%20team%20members%2C%20cutting-edge%20technology%20setup%2C%20advanced%20animation%20equipment%2C%20modern%20creative%20workspace%20with%20purple%20and%20blue%20lighting%2C%20innovation%20and%20technology%20focus&width=300&height=200&seq=timeline-2024&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Our Journey Through Time"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="From humble beginnings to industry leaders - here's how we grew"
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-300 to-blue-300 rounded-full"></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <i className={`${milestone.icon} text-white text-lg`}></i>
                    </div>
                    <div className="text-2xl font-bold text-purple-600">{milestone.year}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 mb-4">{milestone.description}</p>
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    className="w-full h-32 object-cover object-top rounded-lg"
                  />
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full z-10"></div>

              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}