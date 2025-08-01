'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';

export default function LeadershipSection() {
  const leaders = [
    {
      name: 'Nilesh Yadav',
      role: 'Co-Founder & Creative Director',
      bio: 'With over 2 years in animation, he leads our creative vision and ensures every project tells a compelling story. he specializes in character development and narrative design.',
      image: 'https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=360',
      expertise: ['Creative Strategy', 'Character Design', 'Storytelling', 'Team Leadership'],
      achievements: ['7 Animation Awards', '10+ cgpa'],
      social: {
        linkedin: '#',
        twitter: '#',
        behance: '#'
      }
    },
    {
      name: 'Akshay Yadav',
      role: 'Co-Founder & Technical Director',
      bio: 'Akshay combines technical expertise with creative innovation, overseeing our production pipeline and emerging technology integration. His background spans both engineering and arts.',
      image: 'https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=360',
      expertise: ['Technical Innovation', 'Pipeline Development', 'Team Management', '3D Technology'],
      achievements: ['Published 2 Technical Papers', 'WEB devloper'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Leadership That Inspires"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="Meet the visionary leaders who founded Anitech and continue to drive our creative excellence"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <RippleEffect className="block">
                <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6">
                    <div className="relative">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-48 h-60 object-cover object-top rounded-xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-xl"></div>
                    </div>
                    
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                      <p className="text-purple-600 font-semibold mb-4">{leader.role}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{leader.bio}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Expertise</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {leader.expertise.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center text-sm text-gray-600">
                              <i className="ri-check-line text-green-500 mr-2"></i>
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <div className="space-y-1">
                          {leader.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center text-sm text-gray-600">
                              <i className="ri-trophy-line text-yellow-500 mr-2"></i>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-center lg:justify-start space-x-3">
                        {Object.entries(leader.social).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            className="w-10 h-10 bg-white hover:bg-purple-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer"
                          >
                            <i className={`ri-${platform}-line`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RippleEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}