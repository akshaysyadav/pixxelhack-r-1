
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import Marquee from '@/components/Marquee';
import ParticleTrail from '@/components/ParticleTrail';
import RippleEffect from '@/components/RippleEffect';
import AnimatedText from '@/components/AnimatedText';
import GreetingCharacter from '@/components/GreetingCharacter';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const backgroundImages = [
    'https://readdy.ai/api/search-image?query=Modern%20animation%20studio%20workspace%20with%20creative%20professionals%20working%20on%20computers%2C%20vibrant%20purple%20and%20blue%20lighting%2C%20futuristic%20digital%20art%20displays%20on%20walls%2C%20clean%20minimalist%20design%2C%20professional%20animation%20equipment%2C%20soft%20gradient%20lighting%20from%20purple%20to%20blue%2C%20contemporary%20office%20space%20with%20glass%20walls%20and%20modern%20furniture&width=1920&height=1080&seq=hero-bg-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Creative%20animation%20studio%20environment%20with%20multiple%20monitors%20showing%203D%20character%20designs%2C%20colorful%20digital%20art%20creation%20process%2C%20professional%20animators%20collaborating%2C%20modern%20workspace%20with%20purple%20and%20blue%20ambient%20lighting%2C%20high-tech%20animation%20software%20interfaces%2C%20inspiring%20creative%20atmosphere&width=1920&height=1080&seq=hero-bg-2&orientation=landscape'
  ];

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Automatically switch background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change every 3 seconds for more dynamic feel

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <ParticleTrail />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-blue-50 to-white overflow-hidden">
        {/* Alternating Background Images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentBgIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-purple-50/80 to-blue-50/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <AnimatedText
                text="Welcome to"
                className="text-lg text-purple-600 font-medium mb-2"
                variant="fadeIn"
              />
              <AnimatedText
                text="Anitech"
                className="text-6xl md:text-7xl font-[`Pacifico`] text-gray-900 mb-4"
                variant="slideUp"
                delay={0.2}
              />
              <AnimatedText
                text="Animating Imagination into Reality"
                className="text-xl md:text-2xl text-gray-700 mb-8"
                variant="typing"
                delay={0.5}
              />
              <motion.p
                className="text-lg text-gray-600 mb-10 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                We transform ideas into stunning visual stories through cutting-edge animation technology and creative excellence.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <RippleEffect className="inline-block">
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                    <i className="ri-play-fill mr-2"></i>
                    View Our Work
                  </button>
                </RippleEffect>
                <RippleEffect className="inline-block">
                  <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    <i className="ri-message-line mr-2"></i>
                    Get in Touch
                  </button>
                </RippleEffect>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src="https://readdy.ai/api/search-image?query=3D%20animation%20character%20creation%20process%20showing%20wireframe%20to%20final%20render%2C%20colorful%20digital%20art%20with%20purple%20and%20blue%20tones%2C%20modern%20animation%20software%20interface%2C%20creative%20digital%20workspace%2C%20professional%203D%20modeling%20and%20animation%20tools%2C%20vibrant%20colors%20and%20dynamic%20lighting%20effects&width=600&height=400&seq=hero-image&orientation=landscape"
                alt="Animation Process"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Background Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBgIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBgIndex
                  ? 'bg-white shadow-lg'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      <Marquee />

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Creative Services"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              variant="slideUp"
            />
            <AnimatedText
              text="From concept to completion, we bring your vision to life"
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variant="fadeIn"
              delay={0.2}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-movie-line',
                title: '2D Animation',
                description: 'Traditional and digital 2D animation for films, commercials, and educational content.',
                image: 'https://readdy.ai/api/search-image?query=2D%20animation%20character%20design%20and%20storyboard%20creation%2C%20colorful%20cartoon%20style%20illustrations%2C%20traditional%20animation%20techniques%2C%20vibrant%20colors%20with%20purple%20and%20blue%20accents%2C%20creative%20digital%20art%20workspace&width=400&height=250&seq=2d-anim&orientation=landscape'
              },
              {
                icon: 'ri-3d-view',
                title: '3D Animation',
                description: 'Cutting-edge 3D modeling, rigging, and animation for immersive visual experiences.',
                image: 'https://readdy.ai/api/search-image?query=3D%20character%20modeling%20and%20animation%20process%2C%20futuristic%20digital%20art%20creation%2C%20advanced%203D%20rendering%20software%20interface%2C%20professional%20animation%20studio%20setup%2C%20modern%20technology%20with%20purple%20and%20blue%20lighting&width=400&height=250&seq=3d-anim&orientation=landscape'
              },
              {
                icon: 'ri-pantone-line',
                title: 'Motion Graphics',
                description: 'Dynamic motion graphics and visual effects for branding and marketing campaigns.',
                image: 'https://readdy.ai/api/search-image?query=Motion%20graphics%20design%20with%20dynamic%20visual%20effects%2C%20colorful%20animated%20logos%20and%20text%2C%20modern%20digital%20marketing%20visuals%2C%20creative%20motion%20design%20elements%2C%20vibrant%20purple%20and%20blue%20color%20scheme&width=400&height=250&seq=motion-gfx&orientation=landscape'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <RippleEffect className="block h-full">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <i className={`${service.icon} text-2xl text-white`}></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </RippleEffect>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white relative overflow-hidden">
        {/* Dynamic Floating Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-300/20 rounded-lg rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-purple-300/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 right-32 w-8 h-32 bg-white/5 rounded-full transform rotate-45 animate-pulse"></div>

          {/* Animated Circles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-300/20 rounded-full animate-pulse"></div>

          {/* Moving Elements */}
          <div className="absolute top-1/2 left-0 w-2 h-2 bg-white/40 rounded-full animate-float-1"></div>
          <div className="absolute top-1/3 right-0 w-3 h-3 bg-purple-300/40 rounded-full animate-float-2"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-blue-300/50 rounded-full animate-float-3"></div>

          {/* Gradient Orbs */}
          <div className="absolute top-16 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-16 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedText
            text="Ready to Bring Your Ideas to Life?"
            className="text-4xl md:text-5xl font-bold mb-6"
            variant="slideUp"
          />
          <AnimatedText
            text="Let's create something amazing together. Contact us today to discuss your next animation project."
            className="text-xl mb-10 opacity-90"
            variant="fadeIn"
            delay={0.2}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <RippleEffect className="inline-block">
              <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                <i className="ri-rocket-line mr-2"></i>
                Start Your Project
              </button>
            </RippleEffect>
          </motion.div>
          <GreetingCharacter />
        </div>
      </section>

      <Footer />
    </div>
  );
}
