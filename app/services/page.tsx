'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';
import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';
import ProcessSection from './ProcessSection';
import TechnologySection from './TechnologySection';
import PricingSection from './PricingSection';
import CTASection from './CTASection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <TechnologySection />
      <PricingSection />
      <CTASection />
      
      <Footer />
    </div>
  );
}