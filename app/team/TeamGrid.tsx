'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';

export default function TeamGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const departments = ['All', 'Animation', 'Design', 'Technical', 'Production', 'Sound'];

  const teamMembers = [
    {
      name: 'Sarah Williams',
      role: 'Lead 3D Animator',
      department: 'Animation',
      bio: 'Master of 3D character animation with expertise in bringing digital characters to life.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%203D%20animator%20Sarah%20Williams%20at%20workstation%2C%20African%20American%20woman%20in%20her%20late%2020s%2C%203D%20animation%20software%20on%20screen%2C%20creative%20professional%20environment%2C%20modern%20studio%20lighting&width=300&height=300&seq=sarah-team&orientation=squarish',
      skills: ['Maya', 'Blender', 'Character Rigging', 'Motion Capture'],
      experience: '6 years',
      social: { linkedin: '#', behance: '#', artstation: '#' }
    },
    {
      name: 'Marcus Johnson',
      role: 'Motion Graphics Specialist',
      department: 'Design',
      bio: 'Creates stunning motion graphics and visual effects for commercial and entertainment projects.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20motion%20graphics%20specialist%20Marcus%20Johnson%2C%20African%20American%20man%20in%20his%20early%2030s%2C%20working%20on%20motion%20graphics%20project%2C%20colorful%20animated%20designs%20on%20screen%2C%20creative%20studio%20environment&width=300&height=300&seq=marcus-team&orientation=squarish',
      skills: ['After Effects', 'Cinema 4D', 'Premiere Pro', 'Typography'],
      experience: '7 years',
      social: { linkedin: '#', behance: '#', vimeo: '#' }
    },
    {
      name: 'Elena Petrov',
      role: 'Character Designer',
      department: 'Design',
      bio: 'Specialist in creating memorable and expressive characters for various animation projects.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20character%20designer%20Elena%20Petrov%2C%20Eastern%20European%20woman%20in%20her%20late%2020s%2C%20drawing%20character%20sketches%2C%20artistic%20creative%20workspace%20with%20character%20designs%2C%20inspiring%20art%20environment&width=300&height=300&seq=elena-team&orientation=squarish',
      skills: ['Photoshop', 'Illustrator', 'Procreate', 'Traditional Drawing'],
      experience: '5 years',
      social: { instagram: '#', behance: '#', artstation: '#' }
    },
    {
      name: 'Jake Thompson',
      role: 'Technical Artist',
      department: 'Technical',
      bio: 'Bridges the gap between art and technology, optimizing workflows and solving technical challenges.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20technical%20artist%20Jake%20Thompson%2C%20Caucasian%20man%20in%20his%20early%2030s%2C%20working%20with%20technical%20animation%20software%2C%20multiple%20monitors%20showing%20code%20and%203D%20models%2C%20tech-focused%20workspace&width=300&height=300&seq=jake-team&orientation=squarish',
      skills: ['Python', 'MEL Scripting', 'Houdini', 'Pipeline Tools'],
      experience: '8 years',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Priya Sharma',
      role: 'Senior 2D Animator',
      department: 'Animation',
      bio: 'Expert in traditional and digital 2D animation with a focus on fluid character movement.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%202D%20animator%20Priya%20Sharma%2C%20Indian%20woman%20in%20her%20late%2020s%2C%20working%20on%20traditional%20animation%2C%20drawing%20tablet%20and%20colorful%202D%20animations%20on%20screen%2C%20artistic%20creative%20environment&width=300&height=300&seq=priya-team&orientation=squarish',
      skills: ['Toon Boom Harmony', 'TVPaint', 'Adobe Animate', 'Traditional Animation'],
      experience: '6 years',
      social: { behance: '#', instagram: '#', artstation: '#' }
    },
    {
      name: 'David Kim',
      role: 'Lighting Artist',
      department: 'Technical',
      bio: 'Specializes in creating mood and atmosphere through professional lighting and rendering.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20lighting%20artist%20David%20Kim%2C%20Korean%20man%20in%20his%20early%2030s%2C%20working%20with%203D%20lighting%20software%2C%20dramatic%20lighting%20setups%20on%20multiple%20monitors%2C%20professional%20rendering%20environment&width=300&height=300&seq=david-team&orientation=squarish',
      skills: ['Arnold', 'V-Ray', 'Redshift', 'Nuke'],
      experience: '7 years',
      social: { artstation: '#', linkedin: '#', vimeo: '#' }
    },
    {
      name: 'Isabella Martinez',
      role: 'Storyboard Artist',
      department: 'Production',
      bio: 'Visual storyteller who transforms scripts into compelling storyboard sequences.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20storyboard%20artist%20Isabella%20Martinez%2C%20Hispanic%20woman%20in%20her%20mid-20s%2C%20drawing%20storyboard%20frames%2C%20creative%20workspace%20with%20story%20sketches%20and%20sequence%20boards%2C%20artistic%20storytelling%20environment&width=300&height=300&seq=isabella-team&orientation=squarish',
      skills: ['Storyboard Pro', 'Photoshop', 'Traditional Drawing', 'Cinematography'],
      experience: '4 years',
      social: { instagram: '#', behance: '#', linkedin: '#' }
    },
    {
      name: 'Ryan O\'Connor',
      role: 'Sound Designer',
      department: 'Sound',
      bio: 'Creates immersive audio experiences that complement and enhance animated content.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20sound%20designer%20Ryan%20O%5CConnor%2C%20Caucasian%20man%20in%20his%20early%2030s%2C%20working%20in%20professional%20audio%20studio%2C%20sound%20mixing%20equipment%20and%20waveforms%20on%20screens%2C%20music%20production%20environment&width=300&height=300&seq=ryan-team&orientation=squarish',
      skills: ['Pro Tools', 'Logic Pro', 'Ableton Live', 'Sound Libraries'],
      experience: '6 years',
      social: { soundcloud: '#', linkedin: '#', behance: '#' }
    },
    {
      name: 'Aisha Patel',
      role: 'Project Manager',
      department: 'Production',
      bio: 'Ensures projects run smoothly from concept to delivery with exceptional organizational skills.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20project%20manager%20Aisha%20Patel%2C%20Indian%20woman%20in%20her%20early%2030s%2C%20leading%20team%20meeting%2C%20project%20timelines%20and%20charts%20on%20screens%2C%20professional%20management%20office%20environment&width=300&height=300&seq=aisha-team&orientation=squarish',
      skills: ['Project Management', 'Agile', 'Team Leadership', 'Client Relations'],
      experience: '8 years',
      social: { linkedin: '#', twitter: '#', facebook: '#' }
    }
  ];

  const filteredMembers = activeFilter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Our Talented Team"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="Meet the passionate professionals who bring creativity, expertise, and dedication to every project"
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {departments.map((dept) => (
            <RippleEffect key={dept} className="inline-block">
              <button
                onClick={() => setActiveFilter(dept)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                  activeFilter === dept
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50 shadow-md'
                }`}
              >
                {dept}
              </button>
            </RippleEffect>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <RippleEffect className="block h-full">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 h-full">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover object-top rounded-xl shadow-md"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {member.experience}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      {member.department}
                    </div>
                    <div className="flex space-x-2">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="w-8 h-8 bg-gray-100 hover:bg-purple-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                        >
                          <i className={`ri-${platform}-line text-xs`}></i>
                        </a>
                      ))}
                    </div>
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
          <p className="text-gray-600 mb-6">Want to see all 52 team members?</p>
          <RippleEffect className="inline-block">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              <i className="ri-team-line mr-2"></i>
              View Complete Team Directory
            </button>
          </RippleEffect>
        </motion.div>
      </div>
    </section>
  );
}