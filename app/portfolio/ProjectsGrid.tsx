'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import RippleEffect from '@/components/RippleEffect';

type Project = {
  id: number;
  title: string;
  category: string;
  client: string;
  duration: string;
  description: string;
  image: string;
  tags: string[];
  results: string;
};

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const projects = [
    {
      id: 1,
      title: 'TechFlow Brand Animation',
      category: '2D Animation',
      client: 'TechFlow Inc.',
      duration: '45 seconds',
      description: 'Dynamic brand animation showcasing TechFlow\'s innovative software solutions with colorful character animations and smooth transitions.',
      image: 'https://readdy.ai/api/search-image?query=Professional%202D%20brand%20animation%20showing%20tech%20company%20software%20interface%20with%20colorful%20animated%20characters%2C%20modern%20digital%20workspace%2C%20smooth%20transitions%20and%20dynamic%20graphics%2C%20corporate%20technology%20branding&width=600&height=400&seq=project-1&orientation=landscape',
      tags: ['Branding', 'Software', 'Corporate'],
      results: 'Increased brand recognition by 65%'
    },
    {
      id: 2,
      title: 'EcoLife 3D Product Showcase',
      category: '3D Animation',
      client: 'EcoLife Products',
      duration: '2 minutes',
      description: 'Stunning 3D product visualization for sustainable home products, featuring photorealistic rendering and environmental storytelling.',
      image: 'https://readdy.ai/api/search-image?query=Professional%203D%20product%20showcase%20animation%20featuring%20sustainable%20eco-friendly%20home%20products%2C%20photorealistic%20rendering%20with%20natural%20lighting%2C%20environmental%20storytelling%2C%20green%20technology%20focus&width=600&height=400&seq=project-2&orientation=landscape',
      tags: ['Product', 'Sustainability', 'Marketing'],
      results: '40% increase in product sales'
    },
    {
      id: 3,
      title: 'FinanceApp Explainer Video',
      category: 'Explainer Videos',
      client: 'FinanceApp Solutions',
      duration: '90 seconds',
      description: 'Clear and engaging explainer video breaking down complex financial concepts with intuitive visual metaphors and smooth animations.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20explainer%20video%20animation%20for%20finance%20app%20showing%20financial%20charts%2C%20money%20flow%20graphics%2C%20mobile%20app%20interface%2C%20clean%20minimalist%20design%20with%20purple%20and%20blue%20color%20scheme&width=600&height=400&seq=project-3&orientation=landscape',
      tags: ['Finance', 'Education', 'Mobile App'],
      results: '78% improvement in user onboarding'
    },
    {
      id: 4,
      title: 'GameStudio Character Reel',
      category: 'Game Animation',
      client: 'Pixel Game Studio',
      duration: '3 minutes',
      description: 'Dynamic character animation reel showcasing various game characters with diverse animation styles and combat sequences.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20game%20character%20animation%20reel%20showing%20diverse%20animated%20game%20characters%20in%20action%20poses%2C%20combat%20sequences%2C%20fantasy%20and%20sci-fi%20styles%2C%20dynamic%20gaming%20environment&width=600&height=400&seq=project-4&orientation=landscape',
      tags: ['Gaming', 'Characters', 'Action'],
      results: 'Featured in 3 major gaming conventions'
    },
    {
      id: 5,
      title: 'MediCare Motion Graphics',
      category: 'Motion Graphics',
      client: 'MediCare Health',
      duration: '60 seconds',
      description: 'Professional motion graphics package for healthcare company featuring medical iconography and data visualization.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20healthcare%20motion%20graphics%20animation%20with%20medical%20icons%2C%20data%20visualization%20charts%2C%20clean%20clinical%20design%2C%20professional%20medical%20branding%20with%20blue%20and%20white%20color%20scheme&width=600&height=400&seq=project-5&orientation=landscape',
      tags: ['Healthcare', 'Data Viz', 'Medical'],
      results: 'Enhanced patient engagement by 55%'
    },
    {
      id: 6,
      title: 'RetailChain 3D Commercial',
      category: '3D Animation',
      client: 'RetailChain Stores',
      duration: '30 seconds',
      description: 'High-energy 3D commercial animation showcasing retail products with dynamic camera movements and photorealistic rendering.',
      image: 'https://readdy.ai/api/search-image?query=Professional%203D%20retail%20commercial%20animation%20with%20dynamic%20product%20showcase%2C%20high-energy%20camera%20movements%2C%20photorealistic%20retail%20store%20environment%2C%20modern%20shopping%20experience&width=600&height=400&seq=project-6&orientation=landscape',
      tags: ['Retail', 'Commercial', '3D'],
      results: '25% boost in foot traffic'
    },
    {
      id: 7,
      title: 'EduTech Learning Series',
      category: '2D Animation',
      client: 'EduTech Learning',
      duration: '5 episodes',
      description: 'Educational animation series making complex subjects accessible through engaging 2D character animations and visual storytelling.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20educational%202D%20animation%20series%20with%20diverse%20animated%20characters%20learning%20together%2C%20classroom%20and%20laboratory%20settings%2C%20colorful%20educational%20graphics%2C%20friendly%20and%20engaging%20atmosphere&width=600&height=400&seq=project-7&orientation=landscape',
      tags: ['Education', 'Series', 'Learning'],
      results: '92% student engagement rate'
    },
    {
      id: 8,
      title: 'StartupHub Pitch Deck',
      category: 'Motion Graphics',
      client: 'StartupHub Accelerator',
      duration: '2 minutes',
      description: 'Animated pitch deck with motion graphics, charts, and infographics helping startups present their business ideas effectively.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20startup%20pitch%20deck%20animation%20with%20business%20charts%2C%20infographics%2C%20growth%20metrics%2C%20modern%20presentation%20design%2C%20entrepreneurial%20theme%20with%20dynamic%20graphics&width=600&height=400&seq=project-8&orientation=landscape',
      tags: ['Business', 'Startup', 'Presentation'],
      results: '70% investor engagement improvement'
    },
    {
      id: 9,
      title: 'FoodieApp Recipe Videos',
      category: 'Explainer Videos',
      client: 'FoodieApp Kitchen',
      duration: '30 recipes',
      description: 'Series of animated recipe videos with step-by-step cooking instructions, ingredient highlights, and appetizing food visuals.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20animated%20recipe%20videos%20showing%20step-by-step%20cooking%20process%2C%20appetizing%20food%20visuals%2C%20kitchen%20ingredients%20and%20cooking%20utensils%2C%20colorful%20culinary%20animation&width=600&height=400&seq=project-9&orientation=landscape',
      tags: ['Food', 'Recipes', 'Lifestyle'],
      results: '150% app download increase'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <RippleEffect className="block h-full">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <i className="ri-play-circle-line text-2xl text-white"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{project.client} • {project.duration}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-green-600 text-sm">
                        <i className="ri-arrow-up-line mr-1"></i>
                        {project.results}
                      </div>
                      <i className="ri-arrow-right-line text-gray-400 group-hover:text-purple-600 transition-colors duration-300"></i>
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
          <RippleEffect className="inline-block">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              <i className="ri-add-line mr-2"></i>
              Load More Projects
            </button>
          </RippleEffect>
        </motion.div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover object-top rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-4">{selectedProject.client} • {selectedProject.duration}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center text-green-700">
                  <i className="ri-trophy-line mr-2"></i>
                  <strong>Results: </strong>{selectedProject.results}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}