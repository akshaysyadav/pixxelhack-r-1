'use client';

import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      primary: '+1 (555) 123-4567',
      secondary: 'Mon-Fri, 9AM-6PM PST',
      action: 'tel:+15551234567'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      primary: 'hello@anitech.studio',
      secondary: 'We respond within 24 hours',
      action: 'mailto:hello@anitech.studio'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Office',
      primary: '123 Creative Avenue',
      secondary: 'San Francisco, CA 94102',
      action: '#'
    }
  ];

  const socialLinks = [
    { platform: 'linkedin', url: '#', color: 'hover:bg-blue-600' },
    { platform: 'twitter', url: '#', color: 'hover:bg-blue-400' },
    { platform: 'instagram', url: '#', color: 'hover:bg-pink-500' },
    { platform: 'behance', url: '#', color: 'hover:bg-blue-500' },
    { platform: 'youtube', url: '#', color: 'hover:bg-red-500' },
    { platform: 'dribbble', url: '#', color: 'hover:bg-pink-400' }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <AnimatedText
          text="Get in Touch"
          className="text-3xl font-bold text-gray-900 mb-6"
          variant="slideUp"
        />
        
        <div className="space-y-6">
          {contactDetails.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.action}
              className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <i className={`${contact.icon} text-xl text-white`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{contact.title}</h3>
                <p className="text-gray-800 font-medium">{contact.primary}</p>
                <p className="text-gray-600 text-sm">{contact.secondary}</p>
              </div>
              <i className="ri-arrow-right-line text-gray-400 group-hover:text-purple-600 transition-colors duration-300"></i>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        className="bg-white rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <i className="ri-time-line mr-2 text-purple-600"></i>
          Business Hours
        </h3>
        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-700 font-medium">{schedule.day}</span>
              <span className="text-gray-600">{schedule.hours}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <i className="ri-share-line mr-2 text-purple-600"></i>
          Follow Us
        </h3>
        <p className="text-gray-600 mb-4">
          Stay updated with our latest work and behind-the-scenes content.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              className={`w-full aspect-square bg-white ${social.color} hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-sm cursor-pointer`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`ri-${social.platform}-fill text-xl`}></i>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <i className="ri-customer-service-2-line text-white text-sm"></i>
          </div>
          <div>
            <h4 className="font-semibold text-green-800 mb-1">Quick Response Guarantee</h4>
            <p className="text-green-700 text-sm">
              We typically respond to all inquiries within 2-4 hours during business hours. For urgent projects, call us directly!
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}