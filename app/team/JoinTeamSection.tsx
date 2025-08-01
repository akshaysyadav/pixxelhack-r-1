'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';

export default function JoinTeamSection() {
  const openPositions = [
    {
      title: 'Senior 3D Animator',
      department: 'Animation',
      type: 'Full-time',
      location: 'Remote/Hybrid',
      experience: '5+ years',
      urgent: true
    },
    {
      title: 'Motion Graphics Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'On-site',
      experience: '3+ years',
      urgent: false
    },
    {
      title: 'Junior Character Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote',
      experience: '1-2 years',
      urgent: false
    },
    {
      title: 'Technical Director',
      department: 'Technical',
      type: 'Full-time',
      location: 'On-site',
      experience: '7+ years',
      urgent: true
    }
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20animation%20studio%20recruitment%20and%20career%20opportunity%20background%2C%20diverse%20team%20of%20professionals%20working%20together%2C%20inspiring%20creative%20workspace%20with%20growth%20opportunities%2C%20professional%20career%20development%20environment%20with%20purple%20and%20blue%20lighting&width=1920&height=600&seq=join-team-cta&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-purple-900/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Join Our Creative Family"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            variant="slideUp"
          />
          <AnimatedText
            text="We're always looking for talented individuals who share our passion for animation and storytelling. Discover opportunities to grow your career with industry leaders."
            className="text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Current Openings</h3>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{position.title}</h4>
                      <p className="text-purple-200 text-sm">{position.department} • {position.type}</p>
                    </div>
                    {position.urgent && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Urgent
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <i className="ri-map-pin-line mr-1"></i>
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        {position.experience}
                      </div>
                    </div>
                    <i className="ri-arrow-right-line text-purple-300"></i>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <RippleEffect className="inline-block">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm whitespace-nowrap">
                  <i className="ri-briefcase-line mr-2"></i>
                  View All Positions
                </button>
              </RippleEffect>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Why Work With Us?</h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: 'ri-trophy-line',
                  title: 'Industry Recognition',
                  description: 'Work on award-winning projects that make an impact'
                },
                {
                  icon: 'ri-team-line',
                  title: 'Collaborative Environment',
                  description: 'Join a diverse team of creative professionals'
                },
                {
                  icon: 'ri-graduation-cap-line',
                  title: 'Growth Opportunities',
                  description: 'Continuous learning and career development programs'
                },
                {
                  icon: 'ri-heart-3-line',
                  title: 'Great Benefits',
                  description: 'Competitive salary, health insurance, and flexible work'
                },
                {
                  icon: 'ri-global-line',
                  title: 'Global Impact',
                  description: 'Create content that reaches audiences worldwide'
                },
                {
                  icon: 'ri-lightbulb-line',
                  title: 'Creative Freedom',
                  description: 'Freedom to experiment and bring your ideas to life'
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className={`${benefit.icon} text-white`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <RippleEffect className="inline-block w-full">
                <Link href="/contact">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap">
                    <i className="ri-send-plane-line mr-2"></i>
                    Apply Now
                  </button>
                </Link>
              </RippleEffect>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}