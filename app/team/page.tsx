'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamHero from './TeamHero';
import LeadershipSection from './LeadershipSection';
import TeamGrid from './TeamGrid';
import CultureSection from './CultureSection';
import JoinTeamSection from './JoinTeamSection';

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <TeamHero />
      <LeadershipSection />
      <TeamGrid />
      <CultureSection />
      <JoinTeamSection />
      
      <Footer />
    </div>
  );
}