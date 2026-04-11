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
  title: 'Invisible Grills Online | Premium Window Grills | Buy Falcon Grills',
  description:
    'Shop premium invisible grills online. Falcon offers frameless window grills, door grills, and safety grills with professional installation in Delhi, Mumbai, Bangalore & nationwide. Safe, elegant, durable grill solutions.',
  keywords: [
    'invisible grills online',
    'buy invisible grills',
    'invisible grill price',
    'premium window grills',
    'door grills installation',
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
