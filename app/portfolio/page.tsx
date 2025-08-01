'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from './PortfolioHero';
import ProjectsGrid from './ProjectsGrid';
import ClientLogos from './ClientLogos';
import TestimonialsSection from './TestimonialsSection';
import PortfolioCTA from './PortfolioCTA';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <PortfolioHero />
      <ProjectsGrid />
      <ClientLogos />
      <TestimonialsSection />
      <PortfolioCTA />
      
      <Footer />
    </div>
  );
}