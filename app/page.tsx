import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import VideoGallery from '@/components/VideoGallery';
import Carousel from '@/components/Carousel';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import TrustBadges from '@/components/TrustBadges';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Invisible Grills | Premium Frameless Window Grills in Chennai, Delhi & India',
  description:
    'Falcon Invisible Grills offers premium invisible window grills, door grills & frameless safety solutions. Professional installation across India. Safe, elegant, durable. Get free quote today!',
  keywords: [
    'invisible grills',
    'invisible grills in chennai',
    'invisible grills in delhi',
    'safety invisible grills',
    'frameless grills',
    'window grills',
    'door grills',
    'invisible grills online',
    'buy invisible grills',
  ],
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Services />
      <WhyChooseUs />
      <Process />
      <VideoGallery />
      <Gallery />
      <Carousel />
      <Testimonials />
      <TrustBadges />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

