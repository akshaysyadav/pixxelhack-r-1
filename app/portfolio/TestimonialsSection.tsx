'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedText from '@/components/AnimatedText';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20marketing%20director%20Sarah%20Johnson%2C%20confident%20businesswoman%20in%20her%2030s%2C%20modern%20office%20setting%2C%20professional%20headshot%20with%20purple%20and%20blue%20lighting%2C%20corporate%20executive%20portrait&width=100&height=100&seq=testimonial-1&orientation=squarish',
      content: 'Anitech transformed our brand story into a captivating animation that exceeded all expectations. The attention to detail and creative vision they brought to our project was simply outstanding.',
      rating: 5,
      project: 'Brand Animation'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'EcoLife Products',
      image: 'https://readdy.ai/api/search-image?query=Professional%20CEO%20Michael%20Chen%2C%20confident%20business%20leader%20in%20his%2040s%2C%20eco-friendly%20office%20environment%2C%20professional%20executive%20portrait%20with%20natural%20lighting&width=100&height=100&seq=testimonial-2&orientation=squarish',
      content: 'The 3D product showcase Anitech created for us was phenomenal. It helped us communicate our sustainability message in a way that truly resonated with our customers.',
      rating: 5,
      project: '3D Product Showcase'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'FinanceApp Solutions',
      image: 'https://readdy.ai/api/search-image?query=Professional%20product%20manager%20Emily%20Rodriguez%2C%20Hispanic%20woman%20in%20her%20early%2030s%2C%20modern%20tech%20office%2C%20professional%20headshot%20with%20contemporary%20styling&width=100&height=100&seq=testimonial-3&orientation=squarish',
      content: 'Working with Anitech was a game-changer for our app onboarding. Their explainer video made complex financial concepts incredibly easy to understand for our users.',
      rating: 5,
      project: 'Explainer Video'
    },
    {
      name: 'David Park',
      role: 'Creative Director',
      company: 'Pixel Game Studio',
      image: 'https://readdy.ai/api/search-image?query=Professional%20creative%20director%20David%20Park%2C%20Asian%20man%20in%20his%20early%2030s%2C%20gaming%20studio%20environment%20with%20colorful%20displays%2C%20creative%20professional%20portrait&width=100&height=100&seq=testimonial-4&orientation=squarish',
      content: 'The character animations Anitech delivered for our game were absolutely incredible. They brought our characters to life in ways we never imagined possible.',
      rating: 5,
      project: 'Game Character Animation'
    },
    {
      name: 'Lisa Thompson',
      role: 'Brand Manager',
      company: 'MediCare Health',
      image: 'https://readdy.ai/api/search-image?query=Professional%20brand%20manager%20Lisa%20Thompson%2C%20confident%20woman%20in%20her%20late%2020s%2C%20healthcare%20office%20environment%2C%20professional%20corporate%20headshot&width=100&height=100&seq=testimonial-5&orientation=squarish',
      content: 'Anitech\'s motion graphics perfectly captured our healthcare brand values. The professionalism and creativity they demonstrated throughout the project was exceptional.',
      rating: 5,
      project: 'Motion Graphics'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedText
            text="What Our Clients Say"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variant="slideUp"
          />
          <AnimatedText
            text="Don't just take our word for it - hear from the amazing clients we've had the pleasure of working with"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variant="fadeIn"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              key={activeTestimonial}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start space-x-6 mb-6">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover object-top shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-purple-600 font-medium">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-500 text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <i className="ri-play-circle-line"></i>
                  <span>Project: {testimonials[activeTestimonial].project}</span>
                </div>
                <div className="text-6xl text-purple-200 font-serif">"</div>
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white hover:bg-gray-50 shadow-md'
                }`}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover object-top"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold truncate ${
                      index === activeTestimonial ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm truncate ${
                      index === activeTestimonial ? 'text-purple-100' : 'text-gray-500'
                    }`}>
                      {testimonial.company}
                    </p>
                  </div>
                  <div className={`text-sm ${
                    index === activeTestimonial ? 'text-purple-100' : 'text-gray-400'
                  }`}>
                    <i className="ri-arrow-right-s-line"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}