'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';

export default function TeamPreview() {
  const teamMembers = [
    {
      name: 'Maya Rodriguez',
      role: 'Co-Founder & Creative Director',
      bio: 'Award-winning animator with 12+ years of experience in character design and storytelling.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20creative%20director%20Maya%20Rodriguez%20working%20on%20animation%20project%2C%20Hispanic%20woman%20in%20her%2030s%2C%20modern%20animation%20studio%20setting%2C%20confident%20and%20artistic%20pose%2C%20purple%20and%20blue%20lighting%2C%20professional%20headshot%20style&width=300&height=300&seq=maya-profile&orientation=squarish',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Alex Chen',
      role: 'Co-Founder & Technical Director',
      bio: 'Tech innovator specializing in cutting-edge animation software and pipeline development.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20technical%20director%20Alex%20Chen%20in%20animation%20studio%2C%20Asian%20man%20in%20his%2030s%2C%20modern%20technology%20workspace%20with%20multiple%20monitors%2C%20confident%20technical%20professional%2C%20purple%20and%20blue%20ambient%20lighting&width=300&height=300&seq=alex-profile&orientation=squarish',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Sarah Williams',
      role: 'Lead 3D Animator',
      bio: 'Master of 3D character animation bringing life to digital characters with emotion and realism.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%203D%20animator%20Sarah%20Williams%20at%20workstation%2C%20African%20American%20woman%20in%20her%20late%2020s%2C%203D%20animation%20software%20on%20screen%2C%20creative%20professional%20environment%2C%20modern%20studio%20lighting&width=300&height=300&seq=sarah-profile&orientation=squarish',
      social: {
        linkedin: '#',
        behance: '#',
        artstation: '#'
      }
    },
    {
      name: 'Marcus Johnson',
      role: 'Motion Graphics Specialist',
      bio: 'Expert in creating dynamic motion graphics and visual effects for commercial projects.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20motion%20graphics%20specialist%20Marcus%20Johnson%2C%20African%20American%20man%20in%20his%20early%2030s%2C%20working%20on%20motion%20graphics%20project%2C%20colorful%20animated%20designs%20on%20screen%2C%20creative%20studio%20environment&width=300&height=300&seq=marcus-profile&orientation=squarish',
      social: {
        linkedin: '#',
        behance: '#',
        vimeo: '#'
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Meet Our Creative Leaders"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="The passionate minds behind every frame and every story we create"
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <RippleEffect className="block">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 text-center h-full">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover object-top shadow-lg"
                    />
                    <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex justify-center space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-8 h-8 bg-gray-100 hover:bg-purple-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                      >
                        <i className={`ri-${platform}-line text-sm`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </RippleEffect>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Meet the Full Team?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover all 52 talented artists, animators, and creators who make the magic happen at Anitech.
          </p>
          
          <RippleEffect className="inline-block">
            <Link href="/team">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                <i className="ri-team-line mr-2"></i>
                Meet Our Full Team
              </button>
            </Link>
          </RippleEffect>
        </motion.div>
      </div>
    </section>
  );
}