'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        timeline: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatedText
        text="Start Your Project"
        className="text-3xl font-bold text-gray-900 mb-6"
        variant="slideUp"
      />
      
      <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 text-sm"
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 text-sm"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 text-sm"
              placeholder="Your company name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Type *
            </label>
            <div className="relative">
              <select
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 text-sm appearance-none bg-white"
              >
                <option value="">Select project type</option>
                <option value="2d-animation">2D Animation</option>
                <option value="3d-animation">3D Animation</option>
                <option value="motion-graphics">Motion Graphics</option>
                <option value="explainer-video">Explainer Video</option>
                <option value="game-animation">Game Animation</option>
                <option value="other">Other</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range
            </label>
            <div className="relative">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 text-sm appearance-none bg-white"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="over-50k">Over $50,000</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timeline
            </label>
            <div className="relative">
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 text-sm appearance-none bg-white"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP (Rush)</option>
                <option value="1-2-weeks">1-2 weeks</option>
                <option value="3-4-weeks">3-4 weeks</option>
                <option value="1-2-months">1-2 months</option>
                <option value="flexible">Flexible</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Details *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            maxLength={500}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-none text-sm"
            placeholder="Please describe your project, goals, target audience, and any specific requirements..."
          />
          <div className="text-right text-xs text-gray-500 mt-1">
            {formData.message.length}/500 characters
          </div>
        </div>

        {submitStatus === 'success' && (
          <motion.div
            className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <i className="ri-check-circle-line text-green-600 mr-3"></i>
            <div>
              <p className="text-green-700 font-medium">Message sent successfully!</p>
              <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}
        
        <RippleEffect className="block">
          <button
            type="submit"
            disabled={isSubmitting || formData.message.length > 500}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
          >
            {isSubmitting ? (
              <>
                <i className="ri-loader-4-line animate-spin mr-2"></i>
                Sending Message...
              </>
            ) : (
              <>
                <i className="ri-send-plane-line mr-2"></i>
                Send Message
              </>
            )}
          </button>
        </RippleEffect>
      </form>
    </motion.div>
  );
}