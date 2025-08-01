'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import LocationMap from './LocationMap';
import FAQSection from './FAQSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ContactForm />
        <ContactInfo />
      </div>
      <LocationMap />
      <FAQSection />
      
      <Footer />
    </div>
  );
}