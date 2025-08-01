'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';

export default function ServicesList() {
  const services = [
    {
      icon: 'ri-brush-line',
      title: '2D Character Animation',
      description: 'Bring characters to life with fluid, expressive 2D animation that captures emotion and personality in every frame.',
      features: ['Character Design', 'Frame-by-Frame Animation', 'Rigged Animation', 'Lip Sync & Voice Acting'],
      image: 'https://readdy.ai/api/search-image?query=Professional%202D%20character%20animation%20workspace%20showing%20colorful%20animated%20characters%20in%20various%20poses%2C%20animation%20timeline%20software%20interface%2C%20hand-drawn%20character%20sheets%20and%20storyboards%2C%20vibrant%20artistic%20environment%20with%20purple%20and%20blue%20lighting&width=400&height=300&seq=2d-animation&orientation=landscape',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: 'ri-3d-view',
      title: '3D Modeling & Animation',
      description: 'Create stunning three-dimensional worlds and characters with cutting-edge 3D technology and artistic expertise.',
      features: ['3D Modeling', 'Texturing & Lighting', 'Rigging & Animation', 'Rendering & Compositing'],
      image: 'https://readdy.ai/api/search-image?query=Advanced%203D%20animation%20studio%20with%20multiple%20monitors%20displaying%20detailed%203D%20character%20models%2C%20sophisticated%203D%20modeling%20software%20interfaces%2C%20professional%203D%20artists%20working%20on%20realistic%20character%20animations%2C%20modern%20high-tech%20creative%20environment&width=400&height=300&seq=3d-animation&orientation=landscape',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: 'ri-movie-2-line',
      title: 'Motion Graphics Design',
      description: 'Dynamic visual storytelling through motion graphics that engage audiences and communicate messages effectively.',
      features: ['Logo Animation', 'Infographic Videos', 'Title Sequences', 'Social Media Content'],
      image: 'https://readdy.ai/api/search-image?query=Motion%20graphics%20design%20studio%20with%20dynamic%20animated%20logos%20and%20infographics%20on%20screens%2C%20colorful%20motion%20design%20elements%2C%20professional%20motion%20graphics%20software%20interfaces%2C%20creative%20workspace%20with%20animated%20visual%20effects&width=400&height=300&seq=motion-graphics&orientation=landscape',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: 'ri-film-line',
      title: 'Video Production',
      description: 'Complete video production services from concept development to final delivery, tailored for any platform.',
      features: ['Concept Development', 'Storyboarding', 'Video Editing', 'Sound Design'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20video%20production%20studio%20with%20film%20equipment%2C%20editing%20suites%20with%20multiple%20monitors%20showing%20video%20timelines%2C%20professional%20cameras%20and%20lighting%20equipment%2C%20modern%20video%20production%20environment%20with%20creative%20atmosphere&width=400&height=300&seq=video-production&orientation=landscape',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: 'ri-gamepad-line',
      title: 'Game Animation',
      description: 'Specialized animation for gaming industry including character animations, UI elements, and interactive content.',
      features: ['Game Character Animation', 'UI/UX Animation', 'Particle Effects', 'Interactive Elements'],
      image: 'https://readdy.ai/api/search-image?query=Game%20animation%20development%20studio%20with%20gaming%20character%20animations%20on%20screens%2C%20game%20development%20software%20interfaces%2C%20animated%20game%20characters%20and%20environments%2C%20professional%20gaming%20industry%20workspace%20with%20colorful%20displays&width=400&height=300&seq=game-animation&orientation=landscape',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: 'ri-presentation-line',
      title: 'Explainer Videos',
      description: 'Clear, engaging explainer videos that simplify complex concepts and boost audience understanding.',
      features: ['Script Writing', 'Visual Storytelling', 'Voiceover Integration', 'Brand Integration'],
      image: 'https://readdy.ai/api/search-image?query=Explainer%20video%20production%20workspace%20with%20educational%20animated%20content%20on%20screens%2C%20infographic-style%20animations%2C%20professional%20presentation%20design%2C%20clean%20and%20educational%20visual%20content%20creation%20environment&width=400&height=300&seq=explainer-videos&orientation=landscape',
      color: 'from-teal-500 to-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="Our Animation Services"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="Comprehensive creative solutions tailored to bring your unique vision to life"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <RippleEffect className="block h-full">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  <div className="relative h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <i className={`${service.icon} text-2xl text-white`}></i>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <i className="ri-check-line text-green-500 mr-2"></i>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap`}>
                      Learn More
                    </button>
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