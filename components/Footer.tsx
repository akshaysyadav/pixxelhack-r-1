'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import RippleEffect from './RippleEffect';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: 'ri-facebook-fill', href: '#' },
    { name: 'Twitter', icon: 'ri-twitter-fill', href: '#' },
    { name: 'Instagram', icon: 'ri-instagram-fill', href: '#' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', href: '#' },
    { name: 'YouTube', icon: 'ri-youtube-fill', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              className="text-3xl font-['Pacifico'] text-purple-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Anitech
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Animating Imagination into Reality. We create stunning animations that bring stories to life and captivate audiences worldwide.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {socialLinks.map((social) => (
                <RippleEffect key={social.name}>
                  <Link
                    href={social.href}
                    className="w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </Link>
                </RippleEffect>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h4
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {['About', 'Services', 'Portfolio', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.h4
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Contact Info
            </motion.h4>
            <motion.div
              className="space-y-3 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-2">
                <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center"></i>
                <span className="text-sm">123 Animation Street, Creative City, CC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center"></i>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-mail-line w-5 h-5 flex items-center justify-center"></i>
                <span className="text-sm">hello@anitech.studio</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          © 2024 Anitech Animation Studio. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}