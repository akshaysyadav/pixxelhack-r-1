'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedText from '@/components/AnimatedText';
import RippleEffect from '@/components/RippleEffect';
import AboutHero from './AboutHero';
import StorySection from './StorySection';
import ValuesSection from './ValuesSection';
import TimelineSection from './TimelineSection';
import AwardsSection from './AwardsSection';
import StatsSection from './StatsSection';
import TeamPreview from './TeamPreview';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <AboutHero />
      <StorySection />
      <StatsSection />
      <ValuesSection />
      <TimelineSection />
      <AwardsSection />
      <TeamPreview />
      
      <Footer />
    </div>
  );
}